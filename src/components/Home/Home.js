import React, { useEffect, useState } from 'react';
import logo from '../../../src/utilities/logo.png'; 
import Activities from '../Activities/Activities';
import Cart from '../Cart/Cart';
import Myself from '../Myself/Myself';
import './Home.css'; 
const Home = () => {
      const [activities, setActivities] = useState([]); 
      const [cart , setCart] = useState([]);
      useEffect(()=>{
         fetch('activities.json')
         .then(res => res.json())
         .then(data => setActivities(data)); 
      }, []); 
      const handleCart = (selectedActivity) => {
         const exits = cart.find(item => item.name === selectedActivity.name);
         let newCart = [];
         if(!exits){
            selectedActivity.quantity = 1;
            newCart = [...cart, selectedActivity];
         }else{
            const rest = cart.filter(item => item.name !== exits.name); 
            exits.quantity = exits.quantity + 1; 
            newCart = [...rest, exits];
         }
         setCart(newCart);
      }
      console.log(cart);
      
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
               <Myself></Myself>
              <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Home;