'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeC extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
        <p className='m-10'>Si vous venez en boutique, 
        notre équipe sera heureuse de vous aider à trouver le déguisement 
        parfait pour votre soirée. Nous avons une grande variété de costumes pour tous 
        les goûts et toutes les tailles. Vous pourrez essayer plusieurs costumes 
        jusqu'à ce que vous trouviez celui qui vous convient le mieux.
        </p>
        </Fade>
      </div>
    );
  }
}

export default FadeC;
 