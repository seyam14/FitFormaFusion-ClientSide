import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import {FaGoogle } from "react-icons/fa";
import axios from "axios";
import { Helmet } from "react-helmet";


const Login = () => {
    const { googleSignIn,signInUser } = useContext(AuthContext);
    const location =useLocation();
    const Navigate = useNavigate();
    console.log(location);


    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            // 
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axios.post('http://localhost:5000/user', userInfo)
            .then(res =>{
                console.log(res.data);
                Swal.fire("Login Successful!", "You are now logged in.", "success");
                Navigate('/');
            })
            // 
            
            
          })
          // eslint-disable-next-line no-unused-vars
          .catch(error =>{
            Swal.fire("Login Error", "Please add a valid email and password.", "error");
          })
      };

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // const user = { email };

                // eslint-disable-next-line no-unused-vars
                const user = {
                    email,
                    lastLoggedAt: result.user?.metadata?.lastSignInTime
                }
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have successfully logged in!',
                });
            });
    }
        

    return (
        <div className="hero min-h-screen bg-base-500">
      <Helmet>
        <title>FitFF|Login</title>
     </Helmet> 
        <div className="hero-content flex-col ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold"> Please Login </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form  onSubmit={handleLogin }  className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <hr/>
                <button  onClick={handleGoogleLogin} className="btn btn-active btn-accent m-4" > <FaGoogle/> Google Login</button>
                <p className="mb-5 ml-8">Do not have an account ? 
                    <Link to="/register">
                    <span className="text-blue-700 font-bold">Register</span>
                    </Link>
                </p>
            </div>
        </div>
    </div>
);
};


export default Login;