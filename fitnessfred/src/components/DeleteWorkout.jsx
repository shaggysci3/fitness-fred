import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import SmallWorkouts from './SmallWorkout';

const DeleteWorkout = () => {
  // states
  const [showForm, setShowForm] = useState(false);
  
  const [userSearch, setUserSearch] = useState({
    name: "",
  });
  const [allWorkouts,setAllWorkouts]=useState();
  const[deleteId,setDeleteId]=useState()

  // get id for Deleting the user


  

  async function handleSubmit(e) {
    e.preventDefault();
    
        //if User exists, make a delete request
        
        
     
      
    // // fetch request to fetch all users
    // const fetchUsers = async () => {
    //   const response = await fetch("http://127.0.0.1:5555/users");
    //   const UsrArr = await response.json();
    //   getUserId(UsrArr);
    // };
    // fetchUsers().catch(console.error);
  }

  // delete user function
  async function deleteUser(workoutId) {
    try {
      const response = await fetch(`https://birds-ub6e.onrender.com/workouts/${workoutId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log(`User with ID ${workoutId} deleted successfully`);
        setDeleteId(null)
      } else {
        console.error(`Failed to delete user with ID ${workoutId}`);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  
  const toggleForm = () => {
      setShowForm(!showForm);
      
    };
    
    useEffect(() => {
        console.log("deleteid has been called in the use effect")
        const fetchProducts = async () => {
            const response = await fetch("https://birds-ub6e.onrender.com/workouts");
            const WorkoutArr = await response.json();
            setAllWorkouts(WorkoutArr);
        };
        fetchProducts().catch(console.error);
        
    }, [deleteId]);

    useEffect(() => {
        console.log("deleteid has been called in the use effect")
        const fetchProducts = async () => {
            const response = await fetch("https://birds-ub6e.onrender.com/workouts");
            const WorkoutArr = await response.json();
            setAllWorkouts(WorkoutArr);
        };
        fetchProducts().catch(console.error);
        
    }, [showForm]);
    
    
    function handleId(id){
      setDeleteId(id)
    }
    let workout
  if(allWorkouts){
        
       workout =  allWorkouts.map((workout)=>{
          return <img className={deleteId==workout.id?'smallImgSelect':'smallImg'} src={workout.img} key={workout.id} onClick={()=>handleId(workout.id)}/>
        })
    }
    function handleDelete(){
        deleteUser(deleteId);
        
    }
    


  return (
    <>
    <div className='deleteContainer'>
      {showForm && (
        <>
        <div>
           {workout}
           <button onClick={handleDelete}>delete</button>
        </div>
      
      </>
      )}
      
    <Button onClick={toggleForm}>
        {showForm ? 'Done' : 'Delete Workout'}
      </Button>
      </div>
    </>
  );
};

export default DeleteWorkout;
