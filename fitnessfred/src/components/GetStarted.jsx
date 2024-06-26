import { useState } from "react"
import { useOutletContext } from "react-router-dom"

const GetStarted = () =>{
    const[exercises,setExercises]=useOutletContext()
    const[selected,setSelected]=useState([])

    const exer = sessionStorage.getItem('token')

    function handleClick(){
        let suggest = exer? JSON.parse(exer) : [];
        console.log(suggest)
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