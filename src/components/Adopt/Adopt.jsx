import React from 'react'
import './Adopt.css'
import { FaPaw } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import {adoptLists} from '../../assets/data.js'

const Adopt = () => {
  return (
    <div className='adopt'>
      <h2>Adopt A Pet</h2>

      <div className="adopt-grid">
        {adoptLists.map((list) => {
          return <div className="adopt-card" key={list.id}>
          
            <div className="adopt-card-flex">
              <div className="adopt-image-wrapper">
                <img src={list.img} alt="" />
              </div>

              <div className="adopt-info">
                <dl>
                  <div className='data'>
                    <dt>Name:</dt>
                    <dd>{list.name}</dd>
                  </div>
                  <div className='data'>
                    <dt>Breed:</dt>
                    <dd>{list.breed}</dd>
                  </div>
                  <div className='data'>
                    <dt>Age:</dt>
                    <dd>{list.age}</dd>
                  </div>
                  <div className='data'>
                    <dt>Gender:</dt>
                    <dd>{list.gender}</dd>
                  </div>
                  <div className='data'>
                    <dt>Personality:</dt>
                    <dd>{list.personality}</dd>
                  </div>
                  <div className='data'>
                    <dt>Adoption Fee:</dt>
                    <dd>$ {list.fees}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <Link to={`/adopt/${list.id.toString()}`}>
              <button className='adopt-btn'>
                Apply to Adopt
                <FaPaw className='icon'/>
              </button>
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default Adopt
