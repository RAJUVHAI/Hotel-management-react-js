import React from 'react'

import Logo from '../../Images/IMG-20220413-WA0006-removebg-preview.png'
import FilteringHotels from './FilteringHotels';
import HotelIcon from '../../Images/asset 2.svg'
import TourIcon from '../../Images/asset 3.svg'
import UsIcon from '../../Images/usflag.png'

export default function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <a class="navbar-brand" href="#ddsa"> <img width='120px' src={Logo} alt='not found' /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                            <li className="nav-item  mx-3">
                                <a className="nav-link  text-center" href="#fdsa">
                                    <span>  <img src={HotelIcon} alt='not found' />  </span>
                                    <br />Hotels</a>
                            </li>
                            <li className="nav-item  mx-3">
                                <a className="nav-link text-center" href="#ddd">
                                    <span> <img src={TourIcon} alt='not found' />  </span>
                                    <br />Apartments</a>
                            </li>


                        </ul>
                        <div className="currency ">
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle mx-1" href="#dd" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img width='25px' height='25px' className='rounded-circle BdIcon' src={UsIcon} alt="" />  USD
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
