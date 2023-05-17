import React from 'react';
import { useEffect, useState } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';


function Paypal() {
  const [prixTotalPanier, setPrixTotalPanier] = useState(null);

  useEffect(() => {
    const getPrixTotalPanier = () => {
      const total = typeof window !== 'undefined' ? localStorage.getItem('prixTotalPanier') : null;
      setPrixTotalPanier(total);
    };

    getPrixTotalPanier();
  }, []);

        const onSuccess = (payment) => {
        console.log("Paiement effectué avec succès!", payment);           		
        }
 
        const onCancel = (data) => {          
        console.log('Paiement annulé!', data);           
        }
 
        const onError = (err) => {           
        console.log("Error!", err);          
        }
  
        let env = 'sandbox'; // sandbox pour l'essai, production pour un vrai projet
        let currency = 'EUR'; 
        let total = 1; // valeur de 1 $
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox: "ATwGx98qRYnpiclmWrMZ2-c2wKyw-P21wsgJ8vyIUbaw8LRPDZbGkcY1vBctXUCWDWbYWh5NF2Wej7hw", 
           
        }
  

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
          <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        </div>
      </div>
    </>
  );
}

export default Paypal;
