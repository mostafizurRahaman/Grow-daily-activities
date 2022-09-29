import React from 'react';
import './Question.css'; 

const Question = () => {
   return (
      <div className='question-container'>
         <h2>How React work??</h2>
         <ul>
            <li>React is a JavaScript Library. When we write some code in react . React render the codes with render() function. React has a virtual dom that compare previous dom and current dom and find out the changes and show on website. </li>
            <li>react is a one-way-binding library. We can send props or data parent to child component normarlly.</li>
         </ul>
         <h2>What is the different between props and state??</h2>
         <table>
            <thead>
               <tr>
                  <td>Props</td>
                  <td>State</td>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Props are read only.</td>
                  <td>State can be modified.</td>
               </tr>
               <tr>
                  <td>Props send data one component to other component.</td>
                  <td>The Data is passed within the component only. </td>
               </tr>
               <tr>
                  <td>Props are immutable.</td>
                  <td>State are mutable.</td>
               </tr>
            </tbody>
         </table>
         <h2>What does useEffect without data load?</h2>
         <ul>
            <li>to set state data </li>
            <li>to use dependency. </li>
            <li> use useEffect to “clean up” effects</li>
            <li> use useEffect to “clean up” effectsUsing unpredictable timing functions like setTimeout or setInterval</li>
         </ul>
      </div>
   );
};

export default Question;