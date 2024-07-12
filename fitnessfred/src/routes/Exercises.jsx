import { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import AddWorkout from "../components/AddWorkout";
import YourWorkouts from "../components/YourWorkouts";
import DeleteWorkout from "../components/DeleteWorkout";
import AddToUser from "../components/AddToUser";

const Exercises = () => {
  const[show,setshow]=useState(false)
  const[userData,setUserData]=useOutletContext();
  const[hideDefault,setHideDefault]=useState(false)
  
  const [allWorkouts,setAllWorkouts]=useState();
    
  useEffect(() => {
    if(userData.id){
      console.log(userData.id)
      setHideDefault(!hideDefault)
    }else{
      console.log("userData does not have workouts right now please login to see workouts")
    }
    
  }, [userData]);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://birds-ub6e.onrender.com/workouts");
      const WorkoutArr = await response.json();
      setAllWorkouts(WorkoutArr);
    };
    fetchProducts().catch(console.error);
  }, []);

  function handleShow(){
    setshow(!show)
  }
  // init workout
  let workout;
  if (userData.workouts){
     workout =  userData.workouts.map((workout,index)=>{
      return <YourWorkouts key={index} name={workout.name} img={workout.img} timer={workout.timer}/>
    })
 
  }
  let workouts;
  if(allWorkouts){
    workouts = allWorkouts.map((workout,index)=>{
      return <YourWorkouts key={index} name={workout.name} id={workout.id} img={workout.img} timer={workout.timer}/>
    })
  }

  return (
    <>
      <div className="exercises">
        

        {hideDefault == true?(<>
          {userData.id==7?(<>
          <h1>Welcome admin</h1>
            <button onClick={handleShow} >Add Workout</button>
        <DeleteWorkout/>
        <AddToUser/>
        {show?(<>
        <AddWorkout></AddWorkout>
        </>):(<></>)}
            
        </>):(<>
        <div>
          <h1>this is you specialised workout: </h1>
          {workout}
        </div>
        </>)}
        
        </>):(<>
        <div className="testing">
          
          {workouts}
        
        </div>
        </>)}
      </div>
    </>
  );
};

export default Exercises;
