import React from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'; 

const Activities = ({activities, handleCart}) => {
   return (
      <div className='activities'>
        {
         activities.map(activity => <Activity activity={activity} handleCart={handleCart} key={activity.name}></Activity>)
        }
      </div>
   );
};

export default Activities;