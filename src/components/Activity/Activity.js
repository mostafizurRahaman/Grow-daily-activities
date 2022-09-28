import React from 'react';
import "./Activity.css"; 

const Activity = ({activity, handleCart}) => {
   const {name, img, time, buttonDetails, details} = activity; 
   return (
      <div className='activity'>
          <div className='activity-info'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{details? details.slice(0, 60) : "details not added. "} ...read more</p>
            <h5>time: {time} minutes.</h5>
          </div>
           <button className='activity-btn' onClick={()=>handleCart(activity)}>{buttonDetails}</button>
      </div>
   );
};

export default Activity;