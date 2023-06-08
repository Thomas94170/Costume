'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faA, fa3,fa5, fa9, faPhone, faTrain } from '@fortawesome/free-solid-svg-icons';
import { faTrainSubway } from '@fortawesome/free-solid-svg-icons';



class FadeG extends React.Component {
  render() {
    return (
      <div>
        <Fade bottom>
        <div className="flex justify-around">
            <img src='https://images.unsplash.com/photo-1599012307530-d163bd04ecab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80'
            width={250} height={250}/>
            <ul>
             <li>Horaires d'ouvertures : du lundi au samedi 10h - 19h</li>  
             <br /><br /> 
              <li>Adresse : 11 rue de la fontaine au Roy 75011 Paris</li> 
              <br /><br /> 
              <li><FontAwesomeIcon icon={faPhone} />: 06 12 34 56 78</li>
              <br /><br /> 
              <li><FontAwesomeIcon icon={faTrainSubway} />: Oberkampf<FontAwesomeIcon icon={fa5} />&<FontAwesomeIcon icon={fa9} />, Parmentier<FontAwesomeIcon icon={fa3} /> </li>
             
              <br /><br /> 
              <li> <FontAwesomeIcon icon={faTrain} /><FontAwesomeIcon icon={faA} />: Nation </li>
            </ul>
  
        </div>
       
        </Fade>
      </div>
    );
  }
}

export default FadeG;
 