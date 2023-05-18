import React from 'react';
import {  useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalPayment(){
    const [paymentStatus, setPaymentStatus] = useState(null);

    const handlePaymentSuccess = () => {
        setPaymentStatus('success');
        
      };
    
      const handlePaymentError = () => {
        setPaymentStatus('error');
      };
    
      const handlePaymentCancel = () => {
        setPaymentStatus('canceled');
      };     

    return(
        <>
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
        </>
    )
}

