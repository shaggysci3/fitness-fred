import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"

const SmallWorkouts = ({name,img,timer,id}) =>{
  const[userData,setUserData]=useOutletContext()
  function handleClick(e){
    console.log(id)
  }

 
   

    return(
      <>
      <div>
        <button onClick={handleClick}>click me</button>
        <img src={img}></img>
        
        
        
      </div>
      
        
      </>
    )
  }
  export default SmallWorkouts