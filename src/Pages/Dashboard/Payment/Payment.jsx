import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { useParams } from 'react-router-dom';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';


const stripePromise  = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const {salary, _id} = useParams();
  
    return (
      <div>
        <SectionTitle
      subHeading="clear your due"
      heading="Payment"
    ></SectionTitle>
        <Elements stripe={stripePromise} >
          <CheckOutForm salary={salary} trainerId={_id}></CheckOutForm>
        </Elements>
      </div>
    );
  };
  
export default Payment;