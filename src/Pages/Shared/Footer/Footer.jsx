import logo from '../../../assets/FFF.svg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
      viewport={{ once: true }}
      className="bg-gray-800 text-white px-6 md:px-12 py-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Brand */}
        <aside>
          <img className="w-28 h-16 mb-3" src={logo} alt="FitFormaFusion Logo" />
          <p className="text-sm text-gray-300">
             {new Date().getFullYear()} &copy;
            All rights reserved.
          </p>
        </aside>
        {/* Contact Info */}
        <nav>
          <h2 className="footer-title text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm">Email: <a href="mailto:FitFormaFusion@gmail.com" className="text-blue-300 hover:underline">FitFormaFusion@gmail.com</a></p>
          <p className="text-sm mt-1">Phone: <span className="text-gray-300">(+880 17********)</span></p>
        </nav>

        {/* Address */}
        <nav>
          <h2 className="footer-title text-lg font-semibold mb-2">Address</h2>
          <p className="text-sm text-gray-300">Dhaka, Bangladesh</p>
        </nav>

        {/* Social Links */}
        <nav>
          <h2 className="footer-title text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400 transition text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-sky-400 transition text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-400 transition text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-300 transition text-xl">
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>

      {/* Optional Divider */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-xs text-gray-400">
        Made  by FitFormaFusion Team
      </div>
    </motion.footer>
  );
};

export default Footer;
