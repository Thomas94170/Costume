'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeB extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
        <p className='m-10'>Le prix du costume est journalier, 
        ce qui signifie qu'il est préférable de le louer pour le jour même et de le 
        restituer le lendemain au plus tard à midi. Ainsi, vous pourrez profiter pleinement 
        de votre soirée costumée et rendre le costume à temps pour que nous puissions 
        le nettoyer et le préparer pour le prochain client.
        </p>
        </Fade>
      </div>
    );
  }
}

export default FadeB;
 