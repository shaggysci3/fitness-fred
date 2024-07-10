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
          
          <a href="#back">Back</a>
          <a href="#knee">knee</a>
          <a href="#elbow">Elbow</a>
          {workouts}
          
        </div>
        <h3 id="back" >Back</h3>
        <img src="https://imgs.search.brave.com/K8vugIZayDGDNz7sypQWSHnVA7Y8Q9eLPwfGO3RowuM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y1L2Ji/Lzc3L2Y1YmI3NzAy/ZmQwNTY5NjA4OGNk/ODE5MDZkMzExZDRh/LmpwZw" alt="Back exercise"></img>
        <h3 id="knee">Knee</h3>
        <img src="https://imgs.search.brave.com/LPwSIJUiKpjlBbguHUnIdJlAK30JyzvwmCNEHnQKepw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMzYz/NzAucGNkbi5jby93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/Mi9LbmVlLVN0cmVu/Z3RoZW5pbmctRXhl/cmNpc2VzLVdhbGwt/U3F1YXQuanBn" alt="Knee exercise"></img>
        <h3 id="elbow">Elbow</h3>
        <img src="https://imgs.search.brave.com/xx4LPtW5LUMTGIAax0IgHBC9pzYmzBXBCt7Scklr9SY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U1L2Qw/LzFhL2U1ZDAxYTMz/MjZmN2U1MzQ1OWMz/NmI4ZWJlODQ3NzA2/LmpwZw" alt="Elbow exercise"></img>
        </>)}
      </div>
    </>
  );
};

export default Exercises;
