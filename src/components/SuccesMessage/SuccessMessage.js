import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SuccessMessage = () => {
   const notify = () =>  toast('Congratulation!! You Completed Your Activities.');
   return (
      <div>
         <button onClick={notify}>Activities Complete</button>
         <ToastContainer></ToastContainer>
      </div>
   );
};

export default SuccessMessage;