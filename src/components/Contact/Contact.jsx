import React from 'react'
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
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
    <div className='contact'>
      <h1>Contact Us</h1>

      <div className="contact-context">
        <div className="contact-left">
          <h3>Send us a message</h3>
          <p>Feel free to reach out through contact form or find our contact information below.</p>

          <div className="contact-list">
            <p><FaLocationDot className='icon'/>
              123 Rescue Street, Pet City, USA
            </p>

            <p><FaPhone className='icon'/>
              +1 123-456-0978
            </p>

            <p><FaEnvelope className='icon'/>
              hello@foreverhomepaws.com
            </p>
          </div>

          <div className="contact-socials">
            <FaInstagramSquare className='icon'/>
            <FaFacebookSquare className='icon'/>
            <FaTwitterSquare className='icon'/>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>

            <label>Your email</label>
            <input type="email" name="email" placeholder='Enter your email number' required/>

            <label>Write your messages here</label>
            <textarea name="message" placeholder='Enter your message' required></textarea>

            <button type="submit">Submit Form</button>

          </form>
          <span>{result}</span>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
