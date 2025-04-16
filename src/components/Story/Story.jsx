import React, { useRef } from 'react'
import './Story.css'
import story_1A from '../../assets/story_1A.jpg'
import story_1B from '../../assets/story_1B.jpg'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Story = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 900
    if (direction === 'left') {
      sliderRef.current.scrollLeft -= scrollAmount
    } else {
      sliderRef.current.scrollLeft += scrollAmount
    }
  }

  return (
    <div className='story'>
      <div className="title">
        <h1>Success Stories Page</h1>
        <p>See the happy endings of pets who found their forever homes!</p>
      </div>

      <div className="story-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}><FaChevronLeft /></button>
        <div className="story-slider" ref={sliderRef}>
          <div className="story-card">
            <div className="story-card-image">
              <img src={story_1A} alt="" />
              <img src={story_1B} alt="" />
            </div>

            <div className="story-card-text">
              <p>"We found Bella through Forever Home Paws, and she has brought so much joy to our lives!"</p>
              <p className='name'>-Sarah & Mike</p>
            </div>
          </div>

          <div className="story-card">
            <div className="story-card-image">
              <img src={story_1A} alt="" />
              <img src={story_1B} alt="" />
            </div>

            <div className="story-card-text">
              <p>"We found Bella through Forever Home Paws, and she has brought so much joy to our lives!"</p>
              <p className='name'>-Sarah & Mike</p>
            </div>
          </div>

          <div className="story-card">
            <div className="story-card-image">
              <img src={story_1A} alt="" />
              <img src={story_1B} alt="" />
            </div>

            <div className="story-card-text">
              <p>"We found Bella through Forever Home Paws, and she has brought so much joy to our lives!"</p>
              <p className='name'>-Sarah & Mike</p>
            </div>
          </div>
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')}><FaChevronRight /></button>
      </div>
    </div>
  )
}

export default Story
