import React from 'react';

const Cart = ({cart}) => {
   let time = 0; 
   for(const activity of cart){
      time = time + activity.time * activity.quantity; 
   }
   return (
      <div>
         <h3>Gaming Details: </h3>
         <div>
            <p><span>Gaming Time: </span> <span> {time} minutes</span></p>
         </div> 
      </div>
   );
};

export default Cart;