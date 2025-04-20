import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './AdoptPages.css'
import {adoptLists} from '../assets/data.js'
import dog_1 from '../assets/dog_1.jpg'
import { FaArrowLeft } from "react-icons/fa";

const AdoptPages = () => {
  const navigate = useNavigate();
  const {id} = useParams();
 
  const pet = adoptLists.find(list => list.id.toString() === id);

  const [result, setResult] = React.useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a9f2af3-d0bd-4bc7-bae1-67d8f05726a6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='adoptpages'>
      <h1>Adoption Details Form</h1>

      <div className="detail-flex">
        <div className="detail-left">
          <div className="detail-image">
            <img src={pet.img} alt="" />
          </div>
          <div className="detial-info">
            <p>Name: {pet.name}</p>
            <p>Age: {pet.age}</p>
            <p>Breed: {pet.breed}</p>
            <p>Fees: ${pet.fees}</p>
          </div>
        </div>
      
        <div className="detail-right">
          <form onSubmit={onSubmit}>
            <label>Pet's name</label>
            <input type="text" name="petName" placeholder="Pet's name" value={pet.name} readOnly/>

            <label>Your name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>

            <label>Your email</label>
            <input type="email" name="email" placeholder='Enter your email' required/>

            <label>Your phone number</label>
            <input type="text" name="phone" placeholder='Enter your mobile number' required/>

            <label>Write your messages here</label>
            <textarea name="message" placeholder='Enter your message' required>
            </textarea>

            <button type="submit">Submit Form</button>
          </form>
          <span>{result}</span>
        </div>
      </div>

      <button className='back-btn' onClick={() => {navigate('/', {state: {scrollTo: "adopt"}})}}>
        <FaArrowLeft />
      </button>
    </div>
  )
}

export default AdoptPages
