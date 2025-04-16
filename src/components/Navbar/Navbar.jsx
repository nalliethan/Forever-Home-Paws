import React from 'react'
import { FaPaw } from "react-icons/fa6";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <p>Forever Home Paws</p>
        <FaPaw className='logo'/>
      </div>

      <div className="nav-right">
        <ul>
          <li>Home</li>
          <li>Adopt a Pet</li>
          <li>Pet Care Guides</li>
          <li>Success Stories</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
