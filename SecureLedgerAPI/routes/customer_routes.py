from flask import Blueprint, jsonify, request

from models.customer import Customer
from database.db import db
from services.customer_service import get_all_customers, get_customer_by_id, \
                                      update_customer, delete_customer


customer_bp = Blueprint("customer_bp", __name__)


@customer_bp.route("/customers", methods=["GET"])
def get_customers():
    return jsonify(get_all_customers())


@customer_bp.route("/customers/<int:id>", methods=["GET"])
def get_customer(id):

    customer = get_customer_by_id(id)

    if customer is None:
        return jsonify({"message": "Customer not found"}), 404

    return jsonify(customer)


@customer_bp.route("/customers", methods=["POST"])
def create_customer():

    data = request.get_json()

    customer = Customer(
        name=data["name"],
        email=data["email"],
        city=data.get("city"),
        balance=data.get("balance", 0)
    )

    db.session.add(customer)
    db.session.commit()

    return jsonify(customer.to_dict()), 201

@customer_bp.route("/customers/<int:id>", methods=["PUT"])
def update_customer_api(id):

    data = request.get_json()

    customer = update_customer(id, data)

    if customer is None:
        return jsonify({"message": "Customer not found"}), 404

    return jsonify(customer)

@customer_bp.route("/customers/<int:id>", methods=["DELETE"])
def delete_customer_api(id):

    success = delete_customer(id)

    if not success:
        return jsonify({"message": "Customer not found"}), 404

    return jsonify({"message": "Customer deleted successfully"})