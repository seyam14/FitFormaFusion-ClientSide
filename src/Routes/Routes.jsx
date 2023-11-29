import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import Trainer from "../Pages/Trainer/Trainer"
import Trainerdetails from "../Pages/Trainer/Trainerdetails/Trainerdetails";
import BecomeTrainer from "../Pages/Trainer/BecomeTrainer/BecomeTrainer";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import UserBookedPage from "../Pages/Trainer/UserBookedPage/UserBookedPage";
import Classes from "../Pages/Classes/Classes.JSX";
import Forum from "../Pages/Forum/Forum";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import Allsubscribers from "../Pages/Dashboard/Allsubscribers/Allsubscribers";
import AllTrainers from "../Pages/Dashboard/AllTrainers/AllTrainers";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ApliedTrainer from "../Pages/Dashboard/ApliedTrainer/ApliedTrainer";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../Pages/PrivateRoute/AdminRoute.JSX";
import ActivityLog from "../Pages/Dashboard/ActivityLog/ActivityLog";
import UserProfileSettings from "../Pages/Dashboard/UserProfileSettings/UserProfileSettings";
import RecommendedClasses from "../Pages/Dashboard/RecommendedClasses/RecommendedClasses";
import TrainerHome from "../Pages/Dashboard/TrainerHome/TrainerHome";
import Contact from "../Pages/Contact/Contact";
import ManageSlots from "../Pages/Dashboard/ManageSlots/ManageSlots";
import ManageMember from "../Pages/Dashboard/ManageMember/ManageMember";
import TrainerRoute from "../Pages/PrivateRoute/TrainerRoute";





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
            path: "/contact",
            element: <Contact></Contact>
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
            element:<Trainer></Trainer>
          },
          {
            path: "/trainerdetails/:id",
            element:<Trainerdetails></Trainerdetails>,
            loader: ({params}) => fetch(`http://localhost:5000/trainer/${params.id}`)
          },
          {
            path: "/becometrainer",
            element:<PrivateRoute><BecomeTrainer></BecomeTrainer></PrivateRoute>   
          },
          {
            path: "/userbooked",
            element:<PrivateRoute><UserBookedPage></UserBookedPage></PrivateRoute>  
          },
          {
            path: "/classes",
            element: <Classes></Classes>
          },
          {
            path: "/forum",
            element: <Forum></Forum>
          },     
      ]
      },  
      {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            path: 'userHome',
            element: <UserHome></UserHome>
          },
          {
            path: 'activity',
            element: <ActivityLog></ActivityLog>
          },
          {
            path: 'settings',
            element: <UserProfileSettings></UserProfileSettings>
          },
          {
            path: 'classes',
            element: <RecommendedClasses></RecommendedClasses>
          },
          // trainer
          {
            path: 'trainerHome',
            element: <TrainerRoute><TrainerHome></TrainerHome></TrainerRoute> 
          },
          {
            path: 'slots',
            element: <TrainerRoute><ManageSlots></ManageSlots></TrainerRoute>
          },
          {
            path: 'member',
            element:<TrainerRoute><ManageMember></ManageMember></TrainerRoute>
          },
          
  
  
            // admin 
            {
              path: 'adminHome',
              element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
              
            },
            {
              path: 'subscribers',
              element:<AdminRoute><Allsubscribers></Allsubscribers></AdminRoute> 
            },
            {
              path: 'trainers',
              element:<AdminRoute><AllTrainers></AllTrainers></AdminRoute> 
            },
            {
              path: 'payment/:_id/:salary',
              element:<AdminRoute><Payment></Payment></AdminRoute>
            },
            {
              path: 'appliedTrainer',
              element:<AdminRoute><ApliedTrainer></ApliedTrainer></AdminRoute>
            },

            {
              path: 'users',
              element:<AdminRoute><AllUsers></AllUsers></AdminRoute> 
              
            },
        ],
      }, 
]);