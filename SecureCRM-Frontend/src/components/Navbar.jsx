import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

            <div className="container-fluid">

                <Link className="navbar-brand fw-bold" to="/">
                    SecureCRM
                </Link>

                <div className="navbar-nav ms-4">

                    <Link className="nav-link text-white" to="/">
                        Dashboard
                    </Link>

                    <Link className="nav-link text-white" to="/customers">
                        Customers
                    </Link>

                    <Link className="nav-link text-white" to="/ledger">
                        Ledger
                    </Link>

                    <Link className="nav-link text-white" to="/reports">
                        Reports
                    </Link>

                    <Link className="nav-link text-white" to="/settings">
                        Settings
                    </Link>

                </div>

                <div className="ms-auto">

                    <i className="bi bi-person-circle me-2"></i>

                    Admin

                </div>

            </div>

        </nav>
    );
}

export default Navbar;