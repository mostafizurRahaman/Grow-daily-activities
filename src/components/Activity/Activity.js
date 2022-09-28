import React from 'react';
import "./Activity.css"; 

const Activity = ({activity, handleCart}) => {
   const {name, img, time, buttonDetails, details} = activity; 
   return (
      <div className='activity'>
          <div className='activity-info'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p style={{textAlign: "center"}}>{details? details.slice(0, 50) : "details not added. "} <span style={{color: "red", fontWeigh: "bold"}}>...read more</span></p>
            <h5>time required: {time} minutes.</h5>
          </div>
           <button className='activity-btn' onClick={(e)=>{
               handleCart(activity); 
               e.target.classList.add('addButton');
               e.target.innerText = 'Added'; 
               e.target.parentElement.classList.add('selectedActivity');
           }}>{buttonDetails}</button>
      </div>
   );
};

export default Activity;