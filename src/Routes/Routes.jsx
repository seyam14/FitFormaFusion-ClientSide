import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
          {
            path: "/",
            element: <Home></Home>,
            loader : () => fetch('http://localhost:5000/features'),
          },
          {
            path: "/login",
            element: <Login></Login>
          }, 
          {
            path: "/register",
            element: <Register></Register>
          },  
      ]
      },   
]);