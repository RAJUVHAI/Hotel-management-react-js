import React, { useState } from "react";

import { Link } from "react-router-dom";
import Navigation from '../PagesSubComponents/Navigation'
export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="row d-flex justify-content-center ">

                    <div className=" col col-lg-5 col-md-7    m-5 bg-white p-5 shadow-sm border-top-primary-2 ">

                        <div className="form-style">
                            <h3 className="pb-3">Login Form</h3>


                            <form>
                                <div className="form-group pb-3">
                                    <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group pb-3">
                                    <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center"></div>
                                    <div><a href="#forgetpassword">Forget Password?</a></div>
                                </div>
                                <div className="pb-2">
                                    <button type="submit" className="btn btn-primary w-100 font-weight-bold mt-2">Submit</button>
                                </div>
                            </form>


                            <div className="pt-4 text-center">
                                Get Members Benefit. <a href="#sss">  <Link to="/SignUp">Sign Up</Link></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
