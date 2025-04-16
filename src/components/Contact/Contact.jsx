import React from 'react'
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
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
          <h3>Form</h3>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
