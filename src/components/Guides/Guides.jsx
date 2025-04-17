import React from 'react'
import './Guides.css'
import care_1 from '../../assets/care_1.png'
import care_2 from '../../assets/care_2.png'
import care_3 from '../../assets/care_3.png'
import care_4 from '../../assets/care_4.png'
import care_5 from '../../assets/care_5.png'
import care_6 from '../../assets/care_6.png'
import { FaCheck } from "react-icons/fa6";

const Guides = () => {

  const guides = [
    {
      id: 1,
      title: "Nutrition & Feeding",
      lists: ['Best diets for dogs, cats, and rabbits',
              'Safe & dangerous foods for pets',
              'Feeding schedules by age and breed',
              'Homemade vs. commercial pet food'
      ],
      img: care_1,
    },
    {
      id:2,
      title: "Housing & Environment",
      lists: ["Ideal living conditions for different pets",
              "Setting up a cozy space for dogs, cats, and rabbits",
              "Keeping your pet's living area clean and safe",
              "Best pet beds, cages, and litter box tips"
      ],
      img: care_2,
    },
    {
      id: 3,
      title: "Grooming & Hygiene",
      lists: ["Bathing & brushing tips for different breeds",
              "Nail trimming, ear cleaning, and dental care",
              "Best grooming tools for home use",
              "Seasonal care (e.g., winter coats, summer hydration)"
      ],
      img: care_3,
    },
    {
      id: 4,
      title: "Exercise & Playtime",
      lists: ["Daily exercise needs by pet type",
              "Fun indoor & outdoor activities",
              "Best toys for mental stimulation",
              "Preventing obesity in pets"
      ],
      img: care_4,
    },
    {
      id: 5,
      title: "Health & Medical Care",
      lists: ["Vaccination schedules for puppies, kittens, and rabbits",
              "Common pet illnesses and how to spot them",
              "First aid for pets (wounds, choking, poisoning)",
              "Choosing the right veterinarian"
      ],
      img: care_5,
    },
    {
      id:6,
      title: "Training & Behavior",
      lists: ["House training (puppies, kittens, and rabbits)",
              "Teaching basic commands (sit, stay, come)",
              "Addressing behavioral problems (barking, biting, scratching)",
              "Socialization tips for new pets"
      ],
      img: care_6,
    }
  ]



  return (
    <div className='guides'>
      <div className="guides-title">
        <h2>Pet Care Guides</h2>
        <p>Learn how to take care of your pet like a pro!</p>
      </div>
      
      <div className="guides-grid">
        {guides.map((guide) => {
          return <div className="guides-card" key={guide.id}>
            <img src={guide.img} alt="" />
            <p>{guide.title}</p>

            <ul>
              {guide.lists.map((list,idx) => {
                return <div key={idx} className='list'>
                  <FaCheck className='check-icon'/> 
                  <li>{list}</li>
                </div>
              })}
            </ul>
        </div>
        })}
      </div>
    </div>
  )
}

export default Guides
