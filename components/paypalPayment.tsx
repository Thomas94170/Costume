import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalPayment(){
    const [paymentStatus, setPaymentStatus] = useState(null);
    const router = useRouter();

    const handlePaymentSuccess = () => {
        setPaymentStatus('success');
        
      };
    
      const handlePaymentError = () => {
        setPaymentStatus('error');
      };
    
      const handlePaymentCancel = () => {
        setPaymentStatus('canceled');
      };  
      
      useEffect(() => {
        if (paymentStatus === 'success') {
          const timeout = setTimeout(() => {
            router.push('/success');
          }, 6000);
    
          return () => clearTimeout(timeout); // Clear timeout on component unmount
        }
      }, [paymentStatus, router]);

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

          {paymentStatus === 'error' && (
            <p>Transaction interrompue. Code de statut : 400</p>
          )}
          {paymentStatus === 'canceled' && (
            <p>Transaction annulée. Code de statut : 400</p>
          )}
        </>
    )
}

