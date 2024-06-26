import { useOutletContext } from "react-router"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import GetStarted from "../components/GetStarted"





const Home = () =>{
  const[show,setShow]=useState(false)
  function handleShow(){
    setShow(!show)
  }
 
    return(
      <>
      
      <div className="homePage">
      {/* <img className="backgroundImg" src="https://th.bing.com/th/id/OIG3.kt2MbRuDHiLnY8wd6L6_?pid=ImgGn"></img> */}
      <h1 >Welcome</h1>
      <Link onClick={handleShow} to={"/exercises"} className="startButton">Get Started</Link>
      {/* {show?(<><GetStarted></GetStarted></>):(<></>)} */}
      </div>
      
      
        
      </>
    )
  }
  export default Home