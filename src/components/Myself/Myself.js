import React from 'react';
import myImage from '../../utilities/my-image.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import './Myself.css'; 
const Myself = () => {
   return (
      <div className='author-info'>
            <img src={myImage} alt="my-author" className='author-image'/>
            <div className='author-details'>
               <h4>Mostafizur rahaman.</h4>
               <p><small><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></small> <small>Lakshmipur, Bangladesh.</small></p>
            </div>
            <h4 style={{marginTop: "20px"}}>My Skill:</h4>          
            <div className='skill-container'>
               <div className='skill'>
                  <h5>95%</h5>
                  <h4>HTML</h4>
               </div>
               <div className='skill'>
                  <h5>80%</h5>
                  <h4>Css</h4>
               </div>
               <div className='skill'>
                  <h5>75%</h5>
                  <h4>JavaScript</h4>
               </div>
               <div className='skill'>
                  <h5>20%</h5>
                  <h4>React</h4>
               </div>
            </div>
            <div className='health-container'>
               <div className='health'>
                  <h5>60kg</h5>
                  <h4>Weight</h4>
               </div>
               <div className='health'>
                  <h5>5.6 Feet</h5>
                  <h4>Height</h4>
               </div>
            </div>
      </div>
   );
};

export default Myself;