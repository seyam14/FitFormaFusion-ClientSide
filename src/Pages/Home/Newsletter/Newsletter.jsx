import { useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    try {
      if (!name || !email) {
        Swal.fire({
          title: 'Oops!',
          text: 'Please provide both name and email.',
          icon: 'warning',
        });
        return;
      }

      // eslint-disable-next-line no-unused-vars
      const  response = await axios.post('https://b8a12-server-side-seyam14.vercel.app/newsletterInfo', {
        name,
        email,
      });

      Swal.fire({
        title: 'Good job!',
        text: 'Subscribed successfully!',
        icon: 'success',
      });

      // Clear inputs
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error.message);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to subscribe. Try again later.',
        icon: 'error',
      });
    }
  };

  return (
    <div className="container mx-auto mt-12 px-4 md:px-8 lg:px-20">
      <SectionTitle heading="Subscribe to Our Newsletter" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-base-200 rounded-xl shadow-xl p-6 md:p-10 max-w-xl mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
          onClick={handleSubscribe}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 hover:bg-blue-700"
        >
          Subscribe Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Newsletter;
