import React from 'react';
import './SuccessMessage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SuccessMessage = () => {
   const notify = () =>  toast('Congratulation!! You Completed Your Activities.');
   return (
      <div>
         <button onClick={notify} className="notify-button">Activities Complete</button>
         <ToastContainer></ToastContainer>
      </div>
   );
};

export default SuccessMessage;