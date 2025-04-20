import React from 'react'
import { FaPaw } from "react-icons/fa6";
import './Footer.css'
import { Link } from 'react-scroll';

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
      </div>

      <p className='copyright'>2025 © Forever Home Paws - All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
