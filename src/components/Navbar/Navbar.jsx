import React, { useEffect, useState } from 'react'
import { FaPaw } from "react-icons/fa6";
import './Navbar.css'
import { Link } from 'react-scroll';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [darkNav, setDarkNav] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenuBtn = () => {
    setMobileMenu(!mobileMenu);
  }

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

      <div className={`nav-right ${mobileMenu?"":"hide-menu"}`}>
        <ul>
          <li>
            <Link to='hero' smooth={true} offset={0} duration={400} onClick={() => setMobileMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to='adopt' smooth={true} offset={-60} duration={400} onClick={() => setMobileMenu(false)}>
              Adopt a Pet
            </Link>
          </li>
          <li>
            <Link to='guides' smooth={true} offset={-60} duration={400} onClick={() => setMobileMenu(false)}>
              Pet Care Guides
            </Link>
          </li>
          <li>
            <Link to='story' smooth={true} offset={-80} duration={400} onClick={() => setMobileMenu(false)}>
              Success Stories
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} offset={-80} duration={400} onClick={() => setMobileMenu(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <IoMenu className='menu-btn' onClick={handleMenuBtn}/>
    </nav>
  )
}

export default Navbar
