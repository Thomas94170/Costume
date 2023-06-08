'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeD extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
        <p className='m-10'>Si vous préférez commander en ligne, 
        vous pourrez choisir parmi notre sélection de costumes sur notre 
        site web et effectuer votre paiement en ligne. Nous vous enverrons 
        un email de confirmation lorsque votre commande sera prête pour 
        le retrait en click and collect.
        </p>
        </Fade>
      </div>
    );
  }
}

export default FadeD;
 