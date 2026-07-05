import orjson

from cache.redis_client import redis_client
from models.customer import Customer
from database.db import db


def get_all_customers():

    customers = Customer.query.all()

    result = []

    for customer in customers:
        result.append(customer.to_dict())

    return result

def get_customer_by_id(customer_id):

    cache_key = f"customer:{customer_id}"

    cached_customer = redis_client.get(cache_key)

    if cached_customer:
        print("✅ Data coming from Redis")

        return orjson.loads(cached_customer)

    print("🐘 Data coming from PostgreSQL")

    customer = db.session.get(Customer, customer_id)

    if customer is None:
        return None

    customer_dict = customer.to_dict()

    redis_client.setex(
        cache_key,
        60,
        orjson.dumps(customer_dict).decode("utf-8")
    )

    return customer_dict

def update_customer(customer_id, data):

    customer = db.session.get(Customer, customer_id)

    if customer is None:
        return None

    customer.name = data["name"]
    customer.email = data["email"]
    customer.city = data["city"]
    customer.balance = data["balance"]

    db.session.commit()

    cache_key = f"customer:{customer_id}"

    redis_client.delete(cache_key)

    print("🗑 Redis cache deleted")

    return customer.to_dict()

def delete_customer(customer_id):

    customer = db.session.get(Customer, customer_id)

    if customer is None:
        return False

    db.session.delete(customer)
    db.session.commit()

    cache_key = f"customer:{customer_id}"

    redis_client.delete(cache_key)

    print("🗑 Customer deleted from PostgreSQL")
    print("🗑 Cache deleted from Redis")

    return True