import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';


const stripePromise  = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const {salary, _id} = useParams();
  
    // const [trainer, setTrainer] = useState([]);
    //   console.log(trainer);
  
    // useEffect(() => {
    //   axios.get('http://localhost:5050/trainer/${salary}')
    //     .then(res => res.data)
    //     .then(data => setTrainer(data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);
  
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