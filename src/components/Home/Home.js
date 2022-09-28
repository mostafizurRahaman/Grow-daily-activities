import React, { useEffect, useState } from 'react';
import logo from '../../../src/utilities/logo.png'; 
import './Home.css'; 
const Home = () => {
      const [activities, setActivities] = useState([]); 
      useEffect(()=>{
         fetch('activities.json')
         .then(res => res.json())
         .then(data => console.log(data)); 
      }, [])
   return (
      <div className='home'>
         <div className="activities-section">
            <img src={logo} alt="Grow-daily-activities" className='logo' />
               <main className='activities-container'>

               </main>
         </div>
         <div className="sidebar">
            <h2>cart section</h2>
         </div>
      </div>
   );
};

export default Home;