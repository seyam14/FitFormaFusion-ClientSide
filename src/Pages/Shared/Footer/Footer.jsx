import logo from '../../../assets/FFF.svg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-700 text-white">
        <aside>
          <img  className='w-27 h-20' src={logo} alt="" />
          <p>Copyright © 2023 - All right reserved by FitFormaFusion</p>
        </aside> 
        <nav>
          <header className="footer-title">Contact</header> 
          <p>Email : FitFormaFusion@gmail.com</p>
          <p>Phone Number:(+880 1767649313) </p>
        </nav> 
        <nav>
          <header className="footer-title">Address</header> 
          <p>Uttara,Dhaka, Bangladesh</p>
        </nav>
        <nav>
        <div className=" space-x-4">
          <a href="#" className="text-xl text-blue-400 hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl text-blue-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl text-red-400 hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl text-blue-400 hover:text-white">
            <FaLinkedin />
          </a>
        </div>
        </nav>
      </footer>
    );
};

export default Footer;