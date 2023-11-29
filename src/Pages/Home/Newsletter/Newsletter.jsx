import  { useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    try {
      // Check if name and email are not empty
      if (!name || !email) {
        alert('Please provide your name and email.');
        return;
      }

      // Make a POST request to save the data in the database
      const response = await axios.post('https://b8a12-server-side-seyam14.vercel.app/newsletterInfo', { name, email });

      // Handle success
      Swal.fire({
        title: "Good job!",
        text: "Subscribed successfully!",
        icon: "success"
      });
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error('Error subscribing:', error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4 md:px-8 lg:px-16 m-6  bg-base-300">
         <SectionTitle
                heading={'Subscribe to Our Newsletter'}
            ></SectionTitle>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleSubscribe}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
