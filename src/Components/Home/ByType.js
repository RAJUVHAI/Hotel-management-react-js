import React from 'react';
import "./ByType.css"

const ByType = () => {
    return (
        <div className='property-by-type'>
            <h2>Browse by Property Type</h2>
            <div className="properties">
                <div className="property">
                    <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h3>Hotels</h3>
                    <p>7843589 hotels</p>

                </div>
                <div className="property">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h3>Apartments</h3>
                    <p>7888 apartments</p>

                </div>
                <div className="property">
                    <img src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h3>Resorts</h3>
                    <p>84573 resorts</p>
                </div>
                <div className="property">
                    <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h3>Villas</h3><p>8939 villas</p>

                </div>
                <div className="property">
                    <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb3BlcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h3>Cabins</h3>
                    <p>7348579 cabins</p>

                </div>
                <div className="property">
                    <img src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb3BlcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h3>Cottages</h3>
                    <p>89878 cottages</p>

                </div>
            </div>
        </div>
    );
};

export default ByType;