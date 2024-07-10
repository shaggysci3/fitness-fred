import { useState } from "react"
import { useOutletContext, useParams } from "react-router"

const ExercisePage = () =>{
//    const [waresData]=useOutletContext()
   const {id} = useParams();

   

    return(
      <>
      <h1>the workout id that you have selected is {id}</h1>
      
      </>
    )
  }
  export default ExercisePage