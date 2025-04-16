import React from 'react'
import './Hero.css'
import heroImage from '../../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <h1>Every Pet Deserves a Loving Home!</h1>

      <p>Find your perfect furry friend today or learn how to give your pet the best care possible!</p>

      <div className="hero-btns">
        <button>Adopt Now!</button>
        <button className='light-btn'>Read Pet Care Tip</button>
      </div>
      
      <img src={heroImage} alt="" />
    </div>
  )
}

export default Hero
