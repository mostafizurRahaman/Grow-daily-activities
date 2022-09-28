import React, { useEffect, useState } from 'react';
import logo from '../../../src/utilities/logo.png'; 
import Activities from '../Activities/Activities';
import './Home.css'; 
const Home = () => {
      const [activities, setActivities] = useState([]); 
      useEffect(()=>{
         fetch('activities.json')
         .then(res => res.json())
         .then(data => setActivities(data)); 
      }, []); 
      let total = 0; 
      const handleCart = (selectedActivity) => {
            console.log(selectedActivity.time); 
            total = selectedActivity.time + total;
            console.log(selectedActivity) 
      }
   return (
      <div className='home'>
         <div className="activities-section">
            <h2 className='logo'><span className='orange-text'>Grow Daily</span> Activities</h2>
            <h4 className='logo-bottom'>selected today's games:</h4>
               <main className='activities-container'>
                     <Activities activities={activities} handleCart={handleCart}></Activities>
               </main>
         </div>
         <div className="sidebar">
               <h2>{total}</h2>
         </div>
      </div>
   );
};

export default Home;