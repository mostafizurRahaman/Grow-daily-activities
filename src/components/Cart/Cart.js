import Breakdown from '../Breakdown/Breakdown';
import SuccessMessage from '../SuccesMessage/SuccessMessage';

import './Cart.css'

const Cart = ({cart, handleBreak, breakTime}) => {
   let time = 0; 
   for(const activity of cart){
      time = time + activity.time * activity.quantity; 
   }

   
   return (
      <div className='cart'>
         <Breakdown handleBreak={handleBreak}></Breakdown>
         <h3>Gaming Details: </h3>
         <div className='total-time'>
            <h5 className='timing-container'><span>Gaming Time: </span> <span> {time} minutes</span></h5>
         </div> 
         <div className='break-time'>
            <h5 className='breakDown-timeing-container'><span>Break Time: </span> <span> {breakTime? breakTime : 0} minutes</span></h5>
         </div> 
         <SuccessMessage></SuccessMessage>
         
      </div>
   );
};

export default Cart;