import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [show, setShow] = useState(false)

    const handleLoginForm = (event) => {
        event.preventDefault()
        console.log(event.target)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value
        const name = form.name.value;

        console.log(email, password, confirm)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <form onSubmit={handleLoginForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm password</span>
                            </label>
                            <input type="password" name="confirm" placeholder="confirm" className="input input-bordered" required />
                            <label className="label mt-4">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                            <div className="mt-2">
                                <Link to='/login' className="">Already have an account? <span className="text-blue-700 underline">Login</span></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;