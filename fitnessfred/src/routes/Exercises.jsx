import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AddWorkout from "../components/AddWorkout";

const Exercises = () => {
  const backRef = useRef(null);
  const kneeRef = useRef(null);
  const elbowRef = useRef(null);
  const[show,setshow]=useState(false)

  const executeScroll = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  const [allWorkouts,setAllWorkouts]=useState();
    
  useEffect(() => {
    console.log(allWorkouts)
  }, [allWorkouts]);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://birds-ub6e.onrender.com/workouts");
      const WorkoutArr = await response.json();
      setAllWorkouts(WorkoutArr);
      console.log("these are from the database"+WorkoutArr)
    };
    fetchProducts().catch(console.error);
  }, []);

  function handleShow(){
    setshow(!show)
  }

  return (
    <>
      <div className="exercises">
        
        <div className="testing">
          <button onClick={handleShow} >Add Workout</button>
          <button onClick={() => executeScroll(backRef)}>Back</button>
          <button onClick={() => executeScroll(kneeRef)}>Knee</button>
          <button onClick={() => executeScroll(elbowRef)}>Elbow</button>
        </div>
        {show?(<>
        <AddWorkout></AddWorkout>
        </>):(<></>)}
        <h3 ref={backRef}>Back</h3>
        <img src="https://imgs.search.brave.com/K8vugIZayDGDNz7sypQWSHnVA7Y8Q9eLPwfGO3RowuM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y1L2Ji/Lzc3L2Y1YmI3NzAy/ZmQwNTY5NjA4OGNk/ODE5MDZkMzExZDRh/LmpwZw" alt="Back exercise"></img>
        <h3 ref={kneeRef}>Knee</h3>
        <img src="https://imgs.search.brave.com/LPwSIJUiKpjlBbguHUnIdJlAK30JyzvwmCNEHnQKepw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zMzYz/NzAucGNkbi5jby93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/Mi9LbmVlLVN0cmVu/Z3RoZW5pbmctRXhl/cmNpc2VzLVdhbGwt/U3F1YXQuanBn" alt="Knee exercise"></img>
        <h3 ref={elbowRef}>Elbow</h3>
        <img src="https://imgs.search.brave.com/xx4LPtW5LUMTGIAax0IgHBC9pzYmzBXBCt7Scklr9SY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U1L2Qw/LzFhL2U1ZDAxYTMz/MjZmN2U1MzQ1OWMz/NmI4ZWJlODQ3NzA2/LmpwZw" alt="Elbow exercise"></img>
      </div>
    </>
  );
};

export default Exercises;
