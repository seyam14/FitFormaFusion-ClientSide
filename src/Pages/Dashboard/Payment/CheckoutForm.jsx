/* eslint-disable no-unused-vars */
import  { useState, useEffect, useContext } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider/AuthProvider';




const CheckoutForm = ({ salary, trainerId }) => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const [transactionId, setTransactionId] = useState('');
    const {user} = useContext(AuthContext);
    // console.log(user.displayName);
    const [clientSecret, setClientSecret] = useState();
    const elements = useElements();

    useEffect(() => {
        const handlePaymentIntent = async () => {
            try {
                const parsedSalary = parseFloat(salary);
                if (isNaN(parsedSalary)) {
                    console.error('Invalid salary:', salary);
                    return;
                }

                const response = await axios.post('https://b8a12-server-side-seyam14.vercel.app/create-payment-intent', {
                    price: parsedSalary,
                    trainerId
                });

                setClientSecret(response.data.clientSecret);
                console.log('Client Secret:', response.data.clientSecret);
            } catch (error) {
                console.error('Error creating payment intent:', error);
            }
        };

        handlePaymentIntent();
    }, [salary, trainerId]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod);
            setError('');
        }

        // confirm card payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
        payment_method: {
            card: card,
            billing_details: {
                // name: user?.displayName || 'anonymous',
                // email: user?.email || 'anonymous'

                }
            }
        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded')
            console.log('transaction id', paymentIntent.id);
            setTransactionId(paymentIntent.id)

        //     const payment = {
        //         email: user.email,
        //         money: salary,
        //         transactionId: paymentIntent.id,
        //         id: trainerId,
        //         date: new Date(),
        //         status: paymentIntent.status
        //     }
        //     const res = axios.post('https://b8a12-server-side-seyam14.vercel.app/payments', payment);
        //     console.log(res);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md p-8 bg-white rounded-md shadow-md"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Secure Payment</h2>
                <div className="mb-6">
                    <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">
                        Card Information
                    </label>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                <button
                    type="submit"
                    disabled={!stripe || !clientSecret}
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Pay
                </button>
                <p className='text-red-500'>{error}</p>
                {transactionId && <p className='text-green-500 mt-3'>tnxId: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;