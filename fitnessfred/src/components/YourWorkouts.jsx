import { useEffect, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"

const YourWorkouts = ({name,img,timer,id}) =>{
  const[userData,setUserData]=useOutletContext()
  
    
    // useEffect(() => {
    // const workout = sessionStorage.getItem('token')
    // let theWorkout = workout ? JSON.parse(workout) : [] ;
    // console.log("this is what is left int he car: ",theWorkout)
    // }, []);
    console.log(userData.workouts)
 
    function handleClick(){
      console.log(`this workout id is : ${id}`)
      
    }

    return(
      <>
      <div>
        
        <h1> {name} </h1>
        <Link to={`/Exercises/${id}`}>
        <img onClick={handleClick} src={img}></img>
        </Link>
        
      </div>
      
        
      </>
    )
  }
  export default YourWorkouts