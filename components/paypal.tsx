import React from 'react';
import { useEffect, useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';


function Paypal() {
  const [prixTotalPanier, setPrixTotalPanier] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const getPrixTotalPanier = () => {
      const total = typeof window !== 'undefined' ? localStorage.getItem('prixTotalPanier') : null;
      setPrixTotalPanier(total);
    };

    getPrixTotalPanier();
  }, []);

  const handlePaymentSuccess = () => {
    setPaymentStatus('success');
  };

  const handlePaymentError = () => {
    setPaymentStatus('error');
  };

  const handlePaymentCancel = () => {
    setPaymentStatus('canceled');
  };     
 
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-300 p-6 rounded-md shadow-lg">
          <h2 className="text-2xl">Paiement</h2>
          <br />
          <p>Prix total du panier: {prixTotalPanier} €</p>
         <br/>
         <br/>
         <form>
    <label htmlFor="cardNumber">Numéro de carte :</label>
    <input type="text" id="cardNumber" name="cardNumber" placeholder='- - - -  - - - -  - - - -  - - - -' required className="m-4 border-black bg-gray-200" />
    <br />
    <label htmlFor="expiryDate">Date d'expiration :</label>
    <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/AA" required className="m-4 border-black bg-gray-200" />
    <br />
    <label htmlFor="cvv">CVV :</label>
    <input type="text" id="cvv" name="cvv" placeholder='- - -' required className="m-4 border-black bg-gray-200" />
    <br />
    <br />
    <button className='' type="submit">Payer<FontAwesomeIcon className='ml-3' icon={faCreditCard} /></button>
  </form>
  <br/>
  <PayPalScriptProvider options={{ "client-id": "ATwGx98qRYnpiclmWrMZ2-c2wKyw-P21wsgJ8vyIUbaw8LRPDZbGkcY1vBctXUCWDWbYWh5NF2Wej7hw", components: "buttons"  }}>
  <PayPalButtons 
             onApprove={(data, actions) => {
              return handlePaymentSuccess();
            }}
            onError={(err) => {
              handlePaymentError();
            }}
            onCancel={(data) => {
              handlePaymentCancel();
            }} />
</PayPalScriptProvider>
{paymentStatus === 'success' && (
            <p>Transaction acceptée. Code de statut : 200</p>
          )}
          {paymentStatus === 'error' && (
            <p>Transaction interrompue. Code de statut : 400</p>
          )}
          {paymentStatus === 'canceled' && (
            <p>Transaction annulée. Code de statut : 400</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Paypal;
