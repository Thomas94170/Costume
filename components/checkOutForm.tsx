import {PaymentElement} from '@stripe/react-stripe-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <div className='mt-5 text-center'>
      <button className='' type="submit">Payer<FontAwesomeIcon className='ml-3' icon={faCreditCard} /></button>
      </div>
    </form>
  );
};

export default CheckoutForm;
