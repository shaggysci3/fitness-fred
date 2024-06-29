import { useState } from "react"
import { useOutletContext } from "react-router-dom"

const GetStarted = () =>{
    const[exercises,setExercises]=useOutletContext()
    const[selected,setSelected]=useState([])

    

    function handleClick(){
        
    }

 
   

    return(
      <>
      <div>
        <div>

        </div>
        <button onClick={handleClick}>exercises</button>

      </div>
        
      </>
    )
  }
  export default GetStarted