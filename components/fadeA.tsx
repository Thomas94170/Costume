'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeA extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
        <p className='m-10'>Si vous cherchez un déguisement pour une soirée costumée, 
            nous avons une solution pour vous ! Vous pouvez soit venir dans notre boutique, 
            essayer et louer un costume pour la journée ou la soirée, 
            soit le commander directement sur notre site web en click and collect 
            et venir le récupérer dans la journée.
        </p>
        </Fade>
      </div>
    );
  }
}

export default FadeA;
 