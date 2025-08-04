import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/FFF.svg';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAdmin from "../../../Component/Hooks/useAdmin";
import useTrainer from "../../../Component/Hooks/useTrainer";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isAdmin] = useAdmin();
  const [isTrainer] = useTrainer();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => logout();

  const navItemClass = ({ isActive }) =>
    `font-bold px-3 py-2 rounded hover:bg-base-300 transition ${
      isActive ? "text-primary underline underline-offset-4" : ""
    }`;

  const navLinks = (
    <>
      <li><NavLink className={navItemClass} to="/">Home</NavLink></li>
      <li><NavLink className={navItemClass} to="/gallery">Gallery</NavLink></li>
      <li><NavLink className={navItemClass} to="/trainer">Trainer</NavLink></li>
      <li><NavLink className={navItemClass} to="/classes">Classes</NavLink></li>

      {user && isAdmin && (
        <li><NavLink className={navItemClass} to="/dashboard/adminHome">Dashboard</NavLink></li>
      )}
      {user && isTrainer && (
        <li><NavLink className={navItemClass} to="/dashboard/trainerHome">Dashboard</NavLink></li>
      )}
      {user && !isAdmin && !isTrainer && (
        <li><NavLink className={navItemClass} to="/dashboard/userHome">Dashboard</NavLink></li>
      )}

      <li><NavLink className={navItemClass} to="/forum">Forum</NavLink></li>
    </>
  );

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="navbar bg-base-200 shadow-md px-4 md:px-10 sticky top-0 z-50"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52 space-y-1"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img className="w-28 h-12 object-contain" src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        {user ? (
          <>
            <button onClick={handleLogout} className="btn btn-sm btn-error text-white">Logout</button>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm font-semibold">{user?.displayName}</span>
              <img className="w-10 h-10 rounded-full border border-base-300" src={user?.photoURL} alt="User" />
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-primary">Login</button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
