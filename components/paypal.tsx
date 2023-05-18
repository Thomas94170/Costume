import React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import PaypalPayment from './paypalPayment';
import StripePayment from './stripePayment';


function Paypal() {
  const [prixTotalPanier, setPrixTotalPanier] = useState(null);
  

  useEffect(() => {
    const getPrixTotalPanier = () => {
      const total = typeof window !== 'undefined' ? localStorage.getItem('prixTotalPanier') : null;
      setPrixTotalPanier(total);
    };

    getPrixTotalPanier();
  }, []);

 
 
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-300 p-6 rounded-md shadow-lg">
          <h2 className="text-2xl">Paiement</h2>
          <br />
          <p>Prix total du panier: {prixTotalPanier} €</p>
         <br/>
         <br/>
         
    <StripePayment/>
   
  <br/>
  <PaypalPayment/>
        </div>
      </div>
     
    </>
  );
}

export default Paypal;
