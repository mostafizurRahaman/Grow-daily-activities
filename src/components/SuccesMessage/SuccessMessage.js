import React from 'react';
import './SuccessMessage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Activities from '../Activities/Activities';
const SuccessMessage = () => {
   const notify = () => toast.success( `Congratulations!!! You are 
   successfuly complete all Activities`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
   return (
      <div>
         <button onClick={notify} className="notify-button">Activities Complete</button>
         <ToastContainer></ToastContainer>
      </div>
   );
};

export default SuccessMessage;