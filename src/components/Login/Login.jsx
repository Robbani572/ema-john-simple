import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [show, setShow] = useState(false)

    const handleLoginForm = (event) => {
        event.preventDefault()
        console.log(event.target)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleLoginForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                            <div className="cursor-pointer" onClick={() => setShow(!show)}>
                                <span>
                                    {
                                        show === true ? <p className="pl-1 text-blue-600"><small>Hide password</small></p> : <p className="pl-1 text-blue-600"><small>Show password</small></p>
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <div className="mt-2">
                            <Link to='/register' className="">Don't have an account? <span className="text-blue-700 underline">Register</span></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;