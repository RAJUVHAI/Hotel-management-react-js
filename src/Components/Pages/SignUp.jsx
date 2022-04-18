import React from 'react'
import Navigation from '../PagesSubComponents/Navigation'
export default function SignUp() {
    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="row d-flex justify-content-center ">

                    <div className=" col col-lg-5 col-md-7    m-5 bg-white p-5 shadow-sm border-top-primary-2 ">

                        <div className="form-style">
                            <h3 className="pb-3">Register Form</h3>


                            <form>
                                <div className="form-group pb-3">
                                    <input type="text" placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" />
                                </div>
                                <div className="form-group pb-3">
                                    <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group pb-3">
                                    <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="pb-2">
                                    <button type="submit" className="btn btn-primary w-100 font-weight-bold mt-2">Submit</button>
                                </div>
                            </form>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
