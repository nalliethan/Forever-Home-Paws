import React, { useRef } from 'react'
import './Story.css'
import story_1A from '../../assets/story_1A.jpg'
import story_1B from '../../assets/story_1B.jpg'
import story_2A from '../../assets/story_2A.jpg'
import story_2B from '../../assets/story_2B.jpg'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Story = () => {
  const sliderRef = useRef(null);
  const scroll = (direction) => {
    const scrollAmount = 800
    if (direction === 'left') {
      sliderRef.current.scrollLeft -= scrollAmount
    } else {
      sliderRef.current.scrollLeft += scrollAmount
    }
  }


  const storyLists = [
    {
      id:1,
      title: "Bella the Rescue Queen",
      message:"We found Bella through Forever Home Paws, and she has brought so much joy to our lives!",
      adoptBy: "Mia & Jordan, Brooklyn, NY",
      img1: story_1A,
      img2: story_1B,
    },
    {
      id:2,
      title: "Milo the Tabby Cat",
      message:"I thought I was giving him a home, but he gave me a purpose.",
      adoptBy: " Zoe, Los Angeles, CA",
      img1: story_2A,
      img2: story_2B,
    },
  ]
  return (
    <div className='story'>
      <div className="title">
        <h1>Success Stories Page</h1>
        <p>See the happy endings of pets who found their forever homes!</p>
      </div>

      <div className="story-wrapper">
        <button className="scroll-btn left" onClick={() => scroll('left')}>
          <FaChevronLeft />
        </button>

        <div className="story-slider" ref={sliderRef}>
          {
            storyLists.map((list) => {
             return <div className="story-card" key={list.id}>
                <h2 className="story-card-title">
                  {`Success Story #${list.id}: ${list.title}`}
                </h2>

                <div className="story-card-image">
                  <img src={list.img1} alt="" />
                  <img src={list.img2} alt="" />
                </div>

                <div className="story-card-text">
                  <q>{list.message}</q>
                  <p className='name'><b>Adopted By:</b>{list.adoptBy}</p>
                </div>
              </div>

            })
          }

        </div>
        
        <button className="scroll-btn right" onClick={() => scroll('right')}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Story
