import { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () =>{
 

 
   

    return(
      <>
      <div className="navbar">
        <div className="rightNavbar">
            <Link to={"/"}>
                <h3 className="navbarItem" >Home</h3>
            </Link>
            <Link to={"/Exercises"}>
                <h3  className="navbarItem">Exercises</h3>
            </Link>
            <Link to={"/ExerciseDaily"}>
                <h3 className="navbarItem">Exercise of the Day</h3>
            </Link>
        </div>
        <div>
            <Link to={"/login"}>
            <img className="logo" src="https://th.bing.com/th/id/OIG4.S2S0EibF032SOJWNANbD?pid=ImgGn"></img>
            </Link>
        </div>
        

      </div>
        
      </>
    )
  }
  export default Navbar