import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"

const YourWorkouts = ({name,img,timer}) =>{
  const[userData,setUserData]=useOutletContext()
  
    
    // useEffect(() => {
    // const workout = sessionStorage.getItem('token')
    // let theWorkout = workout ? JSON.parse(workout) : [] ;
    // console.log("this is what is left int he car: ",theWorkout)
    // }, []);
    console.log(userData.workouts)
 
   

    return(
      <>
      <div>
        
        <h1> {name} </h1>
        <img src={img}></img>
        
      </div>
      
        
      </>
    )
  }
  export default YourWorkouts