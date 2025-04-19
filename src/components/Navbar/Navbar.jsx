import React, { useEffect, useState } from 'react'
import { FaPaw } from "react-icons/fa6";
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [darkNav, setDarkNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 50? setDarkNav(true): setDarkNav(false);
    })
  },[])

  return (
    <nav className={`${darkNav?"dark-nav": ""}`}>
      <div className="nav-left">
        <p>Forever Home Paws</p>
        <FaPaw className='logo'/>
      </div>

      <div className="nav-right">
        <ul>
          <li>
            <Link to='hero' smooth={true} offset={0} duration={400}>
              Home
            </Link>
          </li>
          <li>
            <Link to='adopt' smooth={true} offset={-60} duration={400}>
              Adopt a Pet
            </Link>
          </li>
          <li>
            <Link to='guides' smooth={true} offset={-60} duration={400}>
              Pet Care Guides
            </Link>
          </li>
          <li>
            <Link to='story' smooth={true} offset={-80} duration={400}>
              Success Stories
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} offset={-80} duration={400}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
