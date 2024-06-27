

// import { Button } from 'react-bootstrap';

import React, { useState, useEffect } from "react";


const AddWorkout = ({setShow}) => {
  // states
  
  const [formData,setFormData] = useState({
    img:"",
    name:"",
    timer:"",
    
  });
  
  // post request to post new user and form funtions
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newWorkout = {
      img:formData.img,
      name: formData.name,
      timer: formData.timer,
      
    }
    try {
      const response = await fetch("https://birds-ub6e.onrender.com/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWorkout),
      });
  
      if (!response.ok) {
        // Handle the case where the server returns an error status
        console.error(`Failed to add product. Status: ${response.status}`);
        alert("fill all text feilds before submitting")
        return;
      }
  
      // If the request is successful, you can handle the response if needed
      const addedWorkout = await response.json();
      console.log("Product added:", addedWorkout);
      alert("your product has been added to the shop")
      // show form again on page
      // setShow(false)
  
      // Clear the form after successful submission
      setFormData({
        img: "",
        name: "",
        timer: "",
      });
  
      // You may want to update your user list or perform other actions here
    } catch (error) {
      console.error("Error adding user:", error);
      alert("fill all text feilds before submitting")
    }
    

  }
  function handleClick(){
    setShow(false)
  }
  

  return (
    <>
    {/* <div onClick={handleClick} className="closeButton" style={{left:"317px",top:"16px"}}>X</div> */}
    <form className="productForm" onSubmit={handleSubmit}>
        

      <div className="formItem">
        <label>Workout Name:</label>
        <br></br>
        <input
        type='text'
        id='name'
        value={formData.name}
        onChange={handleChange}/>
      </div>
      <div style={{position:"relative",left:"50px"}} className="formItem">
        <label>Workout timer(1/0):</label>
        <input
        type='text'
        id='timer'
        value={formData.timer}
        onChange={handleChange}/>
      </div>
      <div>
        <label>Diagram Image</label>
        <br></br>
        <input
        type='text'
        id='img'
        value={formData.img}
        onChange={handleChange}/>
      </div>
      <div>
      <img className='ProductImg-S' src = {formData.img?`${formData.img}`:'https://th.bing.com/th/id/OIG1.sMhHsP9hGxIEbPNAqGkZ?pid=ImgGn'}></img>
      </div>
      
      <button type="submit">Add</button>
        
    </form>
    </>
  )
}

export default AddWorkout