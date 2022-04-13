import React from 'react'

import Logo from '../../Images/asset 0.svg'
import FilteringHotels from './FilteringHotels';
import FlightIcon from '../../Images/asset 1.svg'
import HotelIcon from '../../Images/asset 2.svg'
import TourIcon from '../../Images/asset 3.svg'
import BusIcon from '../../Images/asset 4.svg'
import TrustedLoanIcon from '../../Images/asset 5.svg'
import BdIcon from '../../Images/bdflag.jpg'

export default function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <a class="navbar-brand" href="#ddsa"> <img src={Logo} alt='not found' /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <a className="nav-link  text-center" aria-current="page" href="#dads">
                                    <span> <img src={FlightIcon} alt='not found' /> </span>
                                    <br />Flight</a>
                            </li>
                            <li className="nav-item  mx-3">
                                <a className="nav-link  text-center" href="#fdsa">
                                    <span>  <img src={HotelIcon} alt='not found' />  </span>
                                    <br />Hotels</a>
                            </li>
                            <li className="nav-item  mx-3">
                                <a className="nav-link text-center" href="#ddd">
                                    <span> <img src={TourIcon} alt='not found' />  </span>
                                    <br />Tour</a>
                            </li>
                            <li className="nav-item  mx-3">
                                <a className="nav-link  text-center" href="#fdsa">
                                    <span> <img src={BusIcon} alt='not found' /> </span>
                                    <br />Bus</a>
                            </li>
                            <li className="nav-item  mx-3">
                                <a className="nav-link text-center" href="#ddd">
                                    <span>  <img src={TrustedLoanIcon} alt='not found' />  </span>
                                    <br />Trusted Loan</a>
                            </li>
                        </ul>
                        <div className="currency ">
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle mx-1" href="#dd" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img width='25px' height='25px' className='rounded-circle BdIcon' src={BdIcon} alt="" />  BDT
                                </a>
                                <ul class="dropdown-menu mx-2" aria-labelledby="navbarScrollingDropdown">
                                    <li><a class="dropdown-item" href="#ff">Action</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="currency__signup ">
                            <button className='btn btn-primary'>SIGN IN</button>
                        </div>
                    </div>
                </div>
            </nav >
            <FilteringHotels />
        </div >
    )
}
