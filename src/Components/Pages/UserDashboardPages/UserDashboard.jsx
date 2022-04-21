import React from 'react'

export const UserDashboard = () => {
    return (

        <div className="main-wrapper">
            <section className="inner-hero bg_img" style="background-image: url('https://script.viserlab.com/hotellab/assets/templates/basic/images/bg/hero14.jpg');">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2 className="page-title text-white">Dashboard</h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className="pt-100 pb-100 section--bg dashboard-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-6 pe-xl-4">
                            <div className="user-sidebar">
                                <button className="btn btn-close sidebar-close d-xl-none"></button>
                                <div className="user-menu-widget">
                                    <ul className="user-menu">
                                        <li className="active">
                                            <a href="https://script.viserlab.com/hotellab/user/dashboard"><i className="las la-layer-group"></i> <span>Dashboard</span></a>
                                        </li>
                                        <li className="">
                                            <a href="https://script.viserlab.com/hotellab/user/properties-history"><i className="las la-history"></i> <span>Booking History</span></a>
                                        </li>
                                        <li className="">
                                            <a href="https://script.viserlab.com/hotellab/user/reviews"><i className="lar la-star"></i> <span>Reviews</span></a>
                                        </li>
                                        <li className="">
                                            <a href="https://script.viserlab.com/hotellab/ticket"><i className="las la-cog"></i> <span>Support Tickets</span></a>
                                        </li>
                                        <li className="">
                                            <a href="https://script.viserlab.com/hotellab/user/profile-setting"><i className="las la-user"></i> <span>Profile Setting</span></a>
                                        </li>
                                        <li className="">
                                            <a href="https://script.viserlab.com/hotellab/user/change-password"><i className="las la-user"></i> <span>Change Password</span></a>
                                        </li>
                                        <li className="">
                                            <a href="https://script.viserlab.com/hotellab/user/twofactor"><i className="las la-user-lock"></i><span> 2FA Security</span></a>
                                        </li>
                                        <li>
                                            <a href="https://script.viserlab.com/hotellab/logout"><i className="las la-sign-out-alt"></i> <span>Logout</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 mt-xl-0">
                            <div className="sidebar-toggler-icon d-xl-none">
                                <i className="las la-bars"></i>
                            </div>
                            <div className="row gy-4">
                                <div className="col-md-4 col-sm-6">
                                    <a href="https://script.viserlab.com/hotellab/ticket" className="d-widget">
                                        <div className="d-widget__icon">
                                            <i className="las la-envelope"></i>
                                        </div>
                                        <div className="d-widget__content">
                                            <h3 className="amount">0</h3>
                                            <p className="caption text-dark">Total Ticket</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <a href="https://script.viserlab.com/hotellab/user/properties-history" className="d-widget">
                                        <div className="d-widget__icon">
                                            <i className="menu-icon las la-store-alt"></i>
                                        </div>
                                        <div className="d-widget__content">
                                            <h3 className="amount">0</h3>
                                            <p className="caption text-dark">Total Booked</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <a href="https://script.viserlab.com/hotellab/user/reviews" className="d-widget">
                                        <div className="d-widget__icon">
                                            <i className="las la-star"></i>
                                        </div>
                                        <div className="d-widget__content">
                                            <h3 className="amount">0</h3>
                                            <p className="caption text-dark">Pending Review</p>
                                        </div>
                                    </a>
                                </div>

                            </div>

                            <div className="custom--card mt-5">
                                <div className="card-header pb-3">
                                    <h6 className="d-inline">Booking History</h6>
                                    <a href="https://script.viserlab.com/hotellab/user/properties-history" className="btn btn--base btn-sm float-end">View All</a>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive--md">
                                        <table className="table custom--table">
                                            <thead>
                                                <tr>
                                                    <th>Hotel Name</th>
                                                    <th>Check In</th>
                                                    <th>Check Out</th>
                                                    <th>Phone</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-muted text-center" colspan="100%">No booking history found</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
