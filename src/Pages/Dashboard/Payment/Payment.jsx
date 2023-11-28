import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { useParams } from 'react-router-dom';


const stripePromise  = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const {salary, _id} = useParams();
  
    return (
      <div>
        <h2 className='text-5xl font-mono font-semibold text-center mt-5'>Payment Here</h2>
        <Elements stripe={stripePromise} >
          <CheckOutForm salary={salary} trainerId={_id}></CheckOutForm>
        </Elements>
      </div>
    );
  };
  
export default Payment;