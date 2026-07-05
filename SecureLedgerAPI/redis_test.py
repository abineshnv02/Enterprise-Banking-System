from cache.redis_client import redis_client

redis_client.set("test", "Flask Redis Working")

print(redis_client.get("test"))