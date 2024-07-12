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
      // console.log(`this workout id is : ${id}`)
      
    }

    return(
      <>
        <Link to={`/Exercises/${id}`}>
      <div className="workoutContainer">
        
        <h1> {name} </h1>
        <img className="workoutImg" onClick={handleClick} src={img}></img>
        <div className="moreInfo">
          
          <h1>info</h1>
          <h2>Timer: {timer==0?"none":"10 seconds"}</h2>

        </div>
        
      </div>
      
        
        </Link>
      </>
    )
  }
  export default YourWorkouts