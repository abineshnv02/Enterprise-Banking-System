from flask import Flask

from config import Config
from database.db import db
from models.customer import Customer
from routes.customer_routes import customer_bp

app = Flask(__name__)

app.config.from_object(Config)

db.init_app(app)

app.register_blueprint(customer_bp)


@app.route("/")
def home():
    return "SecureLedger API Running"


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)