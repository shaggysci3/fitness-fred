
import * as React from "react";
import { useState } from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Outlet } from "react-router-dom";
import "./App.css"
import "./routes/Routes.css"
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Exercises from "./routes/Exercises";
import ExerciseOTD from "./routes/ExerciseOTD";
import { useEffect } from "react"
import Login from "./routes/login";
import Footer from "./components/Footer";





const App = () =>{
  const[userData,setUserData]=useState([])
  
  // useEffect(() => {
  //   sessionStorage.setItem('token', JSON.stringify(exercises))
  // }, []); 
  
  
 
  return(
    <>
    <div className="siteContainer">
      <Navbar/>
      <Outlet context={[userData,setUserData]}/>
      <Footer/>
      
    </div>
    </>
  )
}



const router = createBrowserRouter([
  {
    
    
    element: <App/>,
  errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },{
        path: "/Exercises",
        element: <Exercises/>
      },{
        path: "/ExerciseDaily",
        element: <ExerciseOTD/>
      },{
        path:"/login",
        element:<Login/>
      }
      
      
    ]
  }
  
  

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
