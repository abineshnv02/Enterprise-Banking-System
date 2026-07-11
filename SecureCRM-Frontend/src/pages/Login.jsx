import { useState } from "react";
import { login } from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    async function handleLogin() {

        try {

            const tokens = await login(username, password);

            localStorage.setItem("access", tokens.access);

            localStorage.setItem("refresh", tokens.refresh);

            localStorage.setItem("username", tokens.username);

            localStorage.setItem("role", tokens.role);

            toast.success("Login Successful!");

            navigate("/dashboard");

        }

        catch {

            toast.error("Invalid Username or Password");

        }

    }

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3 className="text-center mb-4">

                                Secure CRM Login

                            </h3>

                            <input

                                className="form-control mb-3"

                                placeholder="Username"

                                value={username}

                                onChange={(e) => setUsername(e.target.value)}

                            />

                            <input

                                type="password"

                                className="form-control mb-3"

                                placeholder="Password"

                                value={password}

                                onChange={(e) => setPassword(e.target.value)}

                            />

                            <button

                                className="btn btn-primary w-100"

                                onClick={handleLogin}

                            >

                                Login

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;