import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

function Paypal() {


    // Récupération du prix depuis le localStorage
    const prixTotalPanier = typeof window !== 'undefined' ? localStorage.getItem('prixTotalPanier') : null;
    
    //configuration du paypal pour l'instant valeur de 1$
    
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
        let currency = 'USD'; // paiement en dollar
        let total = 1; // valeur de 1 $
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'YOUR-SANDBOX-APP-ID', 
        }
  

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-300 p-6 rounded-md shadow-lg">
          <h2 className="text-2xl">Paiement par Paypal</h2>
          <br />
          <p>Prix total du panier: {prixTotalPanier} €</p>
         <br/>
         <br/>
          <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        </div>
      </div>
    </>
  );
}

export default Paypal;
