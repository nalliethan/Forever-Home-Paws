import React from 'react'
import { FaPaw } from "react-icons/fa6";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
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
      </div>

      <p className='copyright'>2025 © Forever Home Paws - All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
