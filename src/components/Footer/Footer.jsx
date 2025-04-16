import React from 'react'
import { FaPaw } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <p>Forever Home Paws</p>
        <FaPaw className='logo'/>
      </div>

      <div className="footer-right">
        <ul>
          <li>Home</li>
          <li>Adopt a Pet</li>
          <li>Pet Care Guides</li>
          <li>Success Stories</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
