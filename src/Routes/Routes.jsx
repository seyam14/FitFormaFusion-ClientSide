import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import Trainer from "../Pages/Trainer/Trainer.JSX";
import Trainerdetails from "../Pages/Trainer/Trainerdetails/Trainerdetails.JSX";


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
          {
            path: "/gallery",
            element: <GalleryPage></GalleryPage>
          },
          {
            path: "/trainer",
            element: <Trainer></Trainer>
          },
          {
            path: "/trainerdetails/:id",
            element:<Trainerdetails></Trainerdetails>,
            loader: ({params}) => fetch(`http://localhost:5000/trainer/${params.id}`)
          },
          
          
          
      ]
      },   
]);