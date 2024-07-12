import { useState } from "react"
import { useOutletContext, useParams } from "react-router"

const ExercisePage = () =>{
//    const [waresData]=useOutletContext()
   const {id} = useParams();
   const[sets,setSets]=useState(5)
 
    function handleClick(){
        if(sets>0){

            setSets(sets-1)
        }
    }
    function handleReset(){
        setSets(5)
    }


    return(
      <>
      <h1>the workout id that you have selected is {id}</h1>
       <h1>Single Leg Hip Raises</h1>
            <img src="https://cdn.pixilart.com/photos/large/e66f1f729001a88.png"></img>
            <div className="buttonContainer">
            <h2>{sets>0?`Sets Left: ${sets}`:"Great Job!"}</h2>
            <h2 style={sets>0?{margin:"15px",height:"9px",}:{visibility:"hidden",width:"0",padding:"0"}} className="startButton" onClick={handleClick}>complete set</h2>
            </div>
            <h2 style={{margin:"10px"}} className="startButton" onClick={handleReset}>reset Sets</h2>
      </>
    )
  }
  export default ExercisePage