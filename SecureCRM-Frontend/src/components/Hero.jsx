import { Link } from "react-router-dom";

function Hero() {

    return (

        <div
            className="text-center text-white py-5"
            style={{
                background:
                    "linear-gradient(135deg,#0d6efd,#6610f2)",
                minHeight: "400px"
            }}
        >

            <div className="container">

                <h1 className="display-3 fw-bold">

                    Secure Ledger CRM

                </h1>

                <p className="lead mt-3">

                    AI Powered Enterprise Customer
                    Relationship Management Platform

                </p>

                <div className="mt-4">

                    <Link
                        to="/login"
                        className="btn btn-light btn-lg me-3"
                    >
                        Login
                    </Link>

                    <button
                        className="btn btn-warning btn-lg"
                    >
                        Register
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Hero;