import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const { createUser } = useContext(AuthContext);
  
    const handleRegister = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get("name");
      const email = form.get("email");
      const password = form.get("password");
      const photo =form.get("photo")
  
      // Check if the password meets your criteria
      const message = checkPasswordValidity(password);
  
      if (message) {
        setRegisterError(message);
        return;
      }
  
      // Create the user in Firebase Authentication
      createUser( email, password)
        .then(result => {
          // Registration was successful
          console.log(result.user);
          const createdAt = result.user?.metadata?.creationTime;
          // eslint-disable-next-line no-unused-vars
          const user = {name,photo, email, createdAt: createdAt };
  
          // Send user data to your server (Assuming you have a server)
          fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(user)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                Swal.fire("Registration Successful!", "You are now registered.", "success");
              }
            })
            .catch(error => {
              console.error(error);
            });
        })
        .catch(error => {
          // Registration failed
          if (error.code === 'auth/email-already-in-use') {
            setRegisterError('Email is already in use. Please choose a different one.');
          } else {
            setRegisterError('Registration error. Please try again.');
          }
        });
    };
  
    // Password validation function
    const checkPasswordValidity = (password) => {
      // Define your password validation criteria here
      const isNonWhiteSpace = /^\S*$/;
      if (!isNonWhiteSpace.test(password)) {
        return "Password must not contain Whitespaces.";
      }
  
      const isContainsUppercase = /^(?=.*[A-Z]).*$/;
      if (!isContainsUppercase.test(password)) {
        return "Password must have at least one Uppercase Character.";
      }
  
      const isContainsLowercase = /^(?=.*[a-z]).*$/;
      if (!isContainsLowercase.test(password)) {
        return "Password must have at least one Lowercase Character.";
      }
  
      const isContainsNumber = /^(?=.*[0-9]).*$/;
      if (!isContainsNumber.test(password)) {
        return "Password must contain at least one Digit.";
      }
  
      const isContainsSymbol =
        /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/;
      if (!isContainsSymbol.test(password)) {
        return "Password must contain at least one Special Symbol.";
      }
  
      const isValidLength = /^.{8,16}$/;
      if (!isValidLength.test(password)) {
        return "Password must be 8-16 Characters Long.";
      }
  
      return null; // Password is valid
    };
    return (
        <div className="mb-16  bg-base-500">
         <Helmet>
        <title>FitFF|Register</title>
       </Helmet> 
        <h2 className="text-5xl font-bold text-center mt-5">Please Register</h2>
        <div className="card flex-shrink-0 mx-auto mt-6 w-full max-w-sm shadow-2xl bg-base-200">
        
          <form onSubmit={handleRegister} className="card-body bg-green-500 rounded-xl">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="photo"
                placeholder="Photo"
                name="photo"
                className="input input-bordered"
              />
            </div>
            
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="mb-5 ml-8">
            Already have an account? Please{" "}
            <Link to="/login">
              <span className="text-blue-700 font-bold">Login</span>
            </Link>
          </p>
        </div>
        <div className="text-center mt-3 text-red-600">
          {registerError && <p>{registerError}</p>}
        </div>
      </div>
    );
  };

export default Register;