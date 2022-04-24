import React, { useState, useEffect } from 'react'
import { FaRegStar, FaStar, FaMapMarkerAlt, FaAngleDown } from "react-icons/fa";
import FilteringHotelDocs from './FliteringHotelDocs';
import SkeletonScreen from './HotelSkeaton';

export default function FilteringHotels() {

    // live search start state
    const [query, setQuery] = useState("");
    // live seacrch end state

    // filtering hotel start
    const [Items, setItems] = useState("");
    const filterItem = (categStarItem) => {

        const updatedItems = FilteringHotelDocs.filter((curElem) => {
            return curElem.starCategory === categStarItem;
        })
        setItems(updatedItems);

    }
    // filtering hotels end

    // range price filtering start 




    // range price filtering end


    // skeaton start 
    useEffect(() => {
        // API call simulation
        setTimeout(() => setItems(FilteringHotelDocs), 4000)
        // axios.get('localhost:8000/api/view-hotel').then(res => {

        //     if (res.data.status === 200) {
        //         console.log(res.data.hotels)
        //     }
        // })
    }, []);

    if (!Items) {
        return <SkeletonScreen />
    }
    // skeaton end



    return (
        <div className='shadow-lg'>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 col-md-4  bg-light py-5 px-4 shadow-sm mt-2  ">
                        <div className='py-2 '>

                            <div className="dropdown">
                                <div className="dropdownbtn__icons">
                                    <button className="dropbtn btn btn-light p-2 w-100 d-flex justify-content-between">Dropdown  <FaAngleDown className='my-1' /></button>

                                </div>
                                <div className="dropdown-content w-100">
                                    <a href="#fgf" onClick={() => filterItem('one-star')} >Link 1</a>
                                    <a href="#ff" onClick={() => filterItem('two-star')}>Link 2</a>
                                    <a href="#ff" onClick={() => filterItem('three-star')}>Link 3</a>
                                    <a href="#ff" onClick={() => filterItem('four-star')}>Link 4</a>
                                    <a href="#ff" onClick={() => filterItem('five-star')}>Link 5</a>
                                </div>
                            </div>

                        </div>
                        <div>
                            <span className="py-3" >Filtered by</span>
                            <hr />
                            <div className="input-group">

                                <input type="search" className="form-control" placeholder="Search this blog" onChange={(e) => setQuery(e.target.value)} />


                            </div>
                        </div>
                        <div className='py-3'>
                            <span>Rating</span>

                            <div class="rate d-flex justify-content-between">

                                <FaStar className='starIcon' onClick={() => filterItem('one-star')} />
                                <FaStar className='starIcon' onClick={() => filterItem('two-star')} />
                                <FaStar className='starIcon' onClick={() => filterItem('three-star')} />
                                <FaStar className='starIcon' onClick={() => filterItem('four-star')} />
                                <FaStar className='starIcon' onClick={() => filterItem('five-star')} />




                            </div>
                        </div>
                        <div className="range">
                            <label for="customRange3" className="form-label">Example range</label>
                            <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />

                        </div>

                        <div className="checkbox">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="col col-lg-8 col-md-8">

                        <div className="rows">
                            <div className="cols ">
                                {
                                    Items.filter((hotel) => hotel.title.toLowerCase().includes(query) || hotel.location.toLowerCase().includes(query) || hotel.sublocation.toLowerCase().includes(query) || hotel.discountPrice.toLowerCase().includes(query) || hotel.Price.toLowerCase().includes(query) || hotel.priceTitle.toLowerCase().includes(query) || hotel.percentage.toLowerCase().includes(query)).map((items, index) => {
                                        return (
                                            <>
                                                <div key={index} className="HotelLists bg-light my-2 shadow-lg">
                                                    <div className="image w-75 p-2">
                                                        <img className='hotelsImage ' src={items.Image} alt='not found' />

                                                    </div>
                                                    <div className="contents d-flex  justify-content-between p-2 w-100">
                                                        <div className="leftContents float-left">
                                                            <div className='d-flex'>
                                                                <div className="btnhtl">
                                                                    <button className='border border-primary px-2 rounded'>hotel</button>
                                                                </div>
                                                                <div className="star">

                                                                    <FaRegStar className='starIcon1 star' />
                                                                    <FaRegStar className='starIcon2 star' />
                                                                    <FaRegStar className='starIco3  star' />
                                                                    <FaRegStar className='starIcon4 star' />
                                                                    <FaRegStar className='starIcon5 star' />

                                                                </div>

                                                            </div>
                                                            <h4>{items.title}</h4>
                                                            <span>
                                                                <FaMapMarkerAlt className="text-primary " />  {items.location}
                                                            </span>
                                                            <br />
                                                            <span>
                                                                <FaMapMarkerAlt /> {items.sublocation}
                                                            </span>
                                                        </div>
                                                        <div className="rightContents  ">
                                                            <div className="discount__price  text-right">

                                                                <h4 className=' price text-right' >{items.Price}</h4>
                                                                <span>
                                                                    <del className=' discount text-right'>
                                                                        {items.discountPrice}
                                                                    </del>
                                                                </span>
                                                            </div>
                                                            <div className="priceTitle">
                                                                <h4 className='pricetitle '>
                                                                    {items.priceTitle}
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                {Items.length === 0 && <span>No records found to display!</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
