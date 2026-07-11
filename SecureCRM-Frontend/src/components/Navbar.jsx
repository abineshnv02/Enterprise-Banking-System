import { Link, useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();

    const token = localStorage.getItem("access");
    const username = localStorage.getItem("username");

    const role = localStorage.getItem("role");

    function logout(){

        localStorage.clear();

        navigate("/");

    }

    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link
className="navbar-brand fw-bold"
to="/"
>

🛡 SecureCRM

</Link>

<div className="collapse navbar-collapse">

<ul className="navbar-nav me-auto">

<li className="nav-item">

<Link
className="nav-link"
to="/"
>

Home

</Link>

</li>

{token && (

<>

<li className="nav-item">

<Link
className="nav-link"
to="/dashboard"
>

Dashboard

</Link>

</li>

<li className="nav-item">

<Link
className="nav-link"
to="/customers"
>

Customers

</Link>

</li>

<li className="nav-item">

<Link
className="nav-link"
to="/reports"
>

Reports

</Link>

</li>

</>

)}

</ul>

<div className="d-flex align-items-center">

{token && (

<div className="text-white me-4 text-end">

<div>

<b>

{username}

</b>

</div>

<small>

{role}

</small>

</div>

)}

{!token ?

(

<Link
to="/login"
className="btn btn-warning"
>

Login

</Link>

)

:

(

<button
className="btn btn-danger"
onClick={logout}
>

Logout

</button>

)}

</div>

</div>

</div>

</nav>

);

}

export default Navbar;