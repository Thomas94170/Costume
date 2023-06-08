import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './checkOutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51N9CvQGeC724Kn5VpjvlpKMAKUNpsLgwcytyofMbD8b8J6MSGf0RZQW1HbC6vrwVM4HZNqHn8YFTjo6tmI3wHVuE00d82aBVIN');

export default function StripePayment() {
  //  const options = {
        // passing the client secret obtained from the server
    //    clientSecret: '{{CLIENT_SECRET}}',
     // };

  return (
    <Elements stripe={stripePromise} options={{amount: 100, currency:'eur', mode: 'payment' }}>
    <CheckoutForm/>
    </Elements>
  );
};
