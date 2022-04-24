import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className='header'>
          

            <header className="padding80 font_weight600">
                
                <div className="search_input_box">
                <div className="search_input rooms_box">
                    <div>
                    <a href="#">
                        <div>Location</div>
                        <input type="text" placeholder="Input Location"/>
                    </a>
                    </div>
                    <div className="search_input__start_date">
                    <a href="#">
                        <div>Check in date</div>
                        <input type="datetime" placeholder="Pick check in date" readOnly/>
                    </a>
                    </div>
                    <div className="search_input__end_date">
                    <a href="#">
                        <div>Check out date</div>
                        <input type="datetime" placeholder="Pick check out date" readOnly/>
                    </a>
                    </div>
                    <div>
                    <a href="#">
                        <div>People</div>
                        <input type="number" placeholder="Enter number of people"/>
                    </a>
                    </div>
                    <div>
                    <button className="search_button" style={{textAlign: "center"}}>
                        Check Availability
                    </button>
                    </div>
                </div>
                
                </div>
                
            </header>
            

        </div>
    );
};

export default Header;