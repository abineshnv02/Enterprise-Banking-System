import {
    Link
} from "react-router-dom";

function Footer() {

    return (

<footer
className="bg-dark text-light mt-5 pt-5 pb-3">

<div className="container">

<div className="row">

<div className="col-lg-4">

<h3 className="fw-bold">

🛡 SecureCRM

</h3>

<p className="text-secondary mt-3">

Enterprise Customer Relationship
Management platform built using

React,
Django REST Framework,
JWT Authentication,
AI Integration,
Excel & PDF Reporting.

</p>

</div>

<div className="col-lg-2">

<h5>

Company

</h5>

<ul className="list-unstyled">

<li>

<Link
to="/"
className="text-secondary text-decoration-none"
>

Home

</Link>

</li>

<li>

About

</li>

<li>

Services

</li>

<li>

Careers

</li>

</ul>

</div>

<div className="col-lg-2">

<h5>

Products

</h5>

<ul className="list-unstyled">

<li>

CRM

</li>

<li>

Reports

</li>

<li>

Analytics

</li>

<li>

AI Summary

</li>

</ul>

</div>

<div className="col-lg-4">

<h5>

Contact

</h5>

<p>

📧 admin@securecrm.com

</p>

<p>

☎ +91 9876543210

</p>

<p>

📍 Chennai, India

</p>

<div className="mt-4">

<i className="bi bi-facebook me-3 fs-4"></i>

<i className="bi bi-linkedin me-3 fs-4"></i>

<i className="bi bi-github me-3 fs-4"></i>

<i className="bi bi-twitter-x fs-4"></i>

</div>

</div>

</div>

<hr/>

<div className="text-center">

© 2026 SecureCRM

|

Designed by

Abinesh N V

</div>

</div>

</footer>

);

}

export default Footer;