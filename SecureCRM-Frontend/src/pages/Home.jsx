import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import "./../styles/Home.css";

function Home() {

    return (

        <>

        <section
            className="text-white"
            style={{
                background:
                    "linear-gradient(135deg,#0d6efd,#6610f2)",
                minHeight:"90vh",
                display:"flex",
                alignItems:"center"
            }}
        >

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <h1
                            className="display-3 fw-bold"
                        >
                            Enterprise Secure CRM
                        </h1>

                        <p
                            className="lead mt-4"
                        >

                            AI Powered Customer
                            Relationship Management
                            System built using

                            <br />

                            React • Django REST • JWT
                            • AI • Excel • PDF

                        </p>

                        <div className="mt-5">

                            <Link
                                to="/login"
                                className="btn btn-warning btn-lg me-3"
                            >

                                Login

                            </Link>

                            <Link
                                    to="/register"
                                    className="btn btn-outline-light btn-lg"
                                >

                                    Register

                                </Link>

                        </div>

                    </div>

                    <div className="col-lg-6 text-center">

                        <img

                            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"

                            alt="CRM"

                            className="img-fluid"

                            style={{

                                width:"450px"

                            }}

                        />

                    </div>

                </div>

            </div>

        </section>
        <ImageCarousel />
        <section
            className="container py-5"
        >

            <h2
                className="text-center mb-5"
            >

                Why SecureCRM?

            </h2>

            <div className="row">

                <div className="col-md-4">

                    <div
                        className="card shadow-lg border-0 h-100 feature-card"
                        style={{
                            transition: "all 0.35s ease",
                            borderRadius: "18px",
                            cursor: "pointer"
                        }}
                    >

                        <div
                            className="card-body text-center"
                        >

                            <i
                                className="bi bi-people-fill text-primary"
                                style={{
                                    fontSize:"70px"
                                }}
                            />

                            <h4 className="mt-4 fw-bold">

                                Customer Management

                            </h4>

                            <p className="text-muted">

                                Add, edit,
                                search and manage
                                enterprise customers.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div
                        className="card shadow-lg border-0 h-100 feature-card"
                        style={{
                            transition: "all 0.35s ease",
                            borderRadius: "18px",
                            cursor: "pointer"
                        }}
                    >

                        <div
                            className="card-body text-center"
                        >

                            <i
                                    className="bi bi-robot text-success"
                                    style={{
                                        fontSize:"70px"
                                    }}
                                />

                            <h4 className="mt-4 fw-bold">

                                AI Summary

                            </h4>

                            <p className="text-muted">

                                Generate intelligent
                                customer summaries
                                using Gemini AI.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div
                            className="card shadow-lg border-0 h-100 feature-card"
                            style={{
                                transition: "all 0.35s ease",
                                borderRadius: "18px",
                                cursor: "pointer"
                            }}
                        >

                        <div
                            className="card-body text-center"
                        >

                            <i
                                className="bi bi-bar-chart-fill text-danger"
                                style={{
                                    fontSize:"70px"
                                }}
                            />

                            <h4 className="mt-4 fw-bold">

                                Analytics

                            </h4>

                            <p className="text-muted">

                                Dashboard,
                                reports,
                                exports and
                                charts.

                            </p>

                        </div>

                    </div>

                </div>

                        </div>

        </section>

        {/* Statistics Section */}

        <section
            className="container py-5"
        >

            <h2
                className="text-center mb-5 fw-bold"
            >
                Trusted by Businesses
            </h2>

            <div className="row text-center">

                <div className="col-md-3">

                    <h1 className="display-4 text-primary fw-bold">

                        1000+

                    </h1>

                    <h5>

                        Customers

                    </h5>

                </div>

                <div className="col-md-3">

                    <h1 className="display-4 text-success fw-bold">

                        99.9%

                    </h1>

                    <h5>

                        Uptime

                    </h5>

                </div>

                <div className="col-md-3">

                    <h1 className="display-4 text-danger fw-bold">

                        500+

                    </h1>

                    <h5>

                        AI Summaries

                    </h5>

                </div>

                <div className="col-md-3">

                    <h1 className="display-4 text-warning fw-bold">

                        24×7

                    </h1>

                    <h5>

                        Support

                    </h5>

                </div>

            </div>

        </section>

        </>

    );

}

export default Home;