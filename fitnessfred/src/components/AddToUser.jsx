

// import { Button } from 'react-bootstrap';

import React, { useState, useEffect } from "react";


const AddToUser = ({setShow}) => {
    // states
    let user
    const[allUsers,setAllUsers]=useState()
    const[userId,setUserId]=useState()
    let workout
    const [allWorkouts,setAllWorkouts]=useState()
    const[workoutId,setWorkoutId]=useState()
  
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://birds-ub6e.onrender.com/users");
            const UserArr = await response.json();
            setAllUsers(UserArr);
    };
    fetchProducts().catch(console.error);
    
}, []);

  useEffect(() => {
    
    const fetchProducts = async () => {
        const response = await fetch("https://birds-ub6e.onrender.com/workouts");
        const WorkoutArr = await response.json();
        setAllWorkouts(WorkoutArr);
    };
    fetchProducts().catch(console.error);
    
}, []);
    function handleIdTwo(id){
        setWorkoutId(id)
    }
    if(allWorkouts){ 
       workout =  allWorkouts.map((workout)=>{
          return <img className={workoutId==workout.id?'smallImgSelect':'smallImg'} src={workout.img} key={workout.id} onClick={()=>handleIdTwo(workout.id)}/>
        })
    }
    function handleId(id){
        setUserId(id)
      }

    if(allUsers){ 
        user =  allUsers.map((user)=>{
           return <div style={{padding:"10px"}} className={userId==user.id?'smallImgSelect':'smallImg'} key={user.id} onClick={()=>handleId(user.id)}>{user.name}</div>
         })
     }
     // post request to post the relationship of workotu and user
     async function handleClick(){
        try {
            const response = await fetch(`https://birds-ub6e.onrender.com/users/${userId}/${workoutId}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: {},
            });
        
            if (!response.ok) {
              // Handle the case where the server returns an error status
              console.error(`Failed to add product. Status: ${response.status}`);
              alert("joe already has this workout")
              return;
            }
        
            // If the request is successful, you can handle the response if needed
            const addedWorkout = await response.json();
            console.log(addedWorkout);
            alert("your product has been added to the shop")
            
          } catch (error) {
            console.error("Error adding user:", error);
            alert("fill all text feilds before submitting")
          }
     }

  return (
    <>
    <div class>

    <div className="selectUser">
        {workout}
    </div>
    <div className="selectUser">
        {user}
    </div>
    <button onClick={handleClick}>add to user</button>
    </div>
    
    </>
  )
}

export default AddToUser