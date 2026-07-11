import { useState } from "react";
import { register } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        username: "",

        email: "",

        password: "",

        confirmPassword: "",

    });

    function handleChange(e) {

        setUser({

            ...user,

            [e.target.name]: e.target.value,

        });

    }

    async function handleRegister() {

        if (user.password !== user.confirmPassword) {

            toast.error("Passwords do not match");

            return;

        }

        try {

            await register({

                username: user.username,

                email: user.email,

                password: user.password,

            });

            toast.success("Registration Successful");

            navigate("/login");

        }

        catch (error) {

            if (error.response?.data) {

                const data = error.response.data;

                const message = Object.values(data).flat().join("\n");

                toast.error(message);

            }

            else {

                toast.error("Registration Failed");

            }

        }

    }

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3 className="text-center mb-4">

                                Create Account

                            </h3>

                            <input
                                className="form-control mb-3"
                                placeholder="Username"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="Email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={user.confirmPassword}
                                onChange={handleChange}
                            />

                            <button
                                className="btn btn-success w-100"
                                onClick={handleRegister}
                            >

                                Register

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;