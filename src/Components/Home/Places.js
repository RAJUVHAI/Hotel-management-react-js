import React from 'react';
import "./Places.css"

const Places = () => {
    return (
        <div className='places'>
            <div className="place-first">
                <div className='place dubai'></div>
            <div className='place turkey'></div>
            </div>
            <div className="place-second">
            <div className='place london'></div>
            <div className='place usa'></div>
            <div className='place bangkok'></div>
            </div>
            
        </div>
    );
};

export default Places;