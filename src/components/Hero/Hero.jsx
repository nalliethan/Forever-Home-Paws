import React from 'react'
import './Hero.css'
import heroImage from '../../assets/hero.jpg'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero'>
      <h1>Every Pet Deserves a Loving Home!</h1>

      <p>Find your perfect furry friend today or learn how to give your pet the best care possible!</p>

      <div className="hero-btns">
        <button>
          <Link to='adopt' smooth={true} offset={-60} duration={400}>
            Adopt Now!
          </Link>
        </button>

        <button className='light-btn'>
          <Link to='guides' smooth={true} offset={-60} duration={400}>
            Read Pet Care Tip
          </Link>
        </button>
      </div>
      
      <img src={heroImage} alt="" />
    </div>
  )
}

export default Hero
