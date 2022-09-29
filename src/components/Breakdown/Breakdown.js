import React from "react";
import "./Breakdown.css";

const Breakdown = ({handleBreak}) => {
   return (
      <div>
         <h3>Add A Break</h3>
         <div className="breakDown-container">
            <p onClick={(e) => handleBreak(e.target.innerText)}> 10 <br />min</p>
            <p onClick={(e) => handleBreak(e.target.innerText)}>15 <br />min</p>
            <p onClick={(e) => handleBreak(e.target.innerText)}>20 <br />min</p>
            <p onClick={(e) => handleBreak(e.target.innerText)}>30 <br />min</p>
         </div>
      </div>
   );
};

export default Breakdown;
