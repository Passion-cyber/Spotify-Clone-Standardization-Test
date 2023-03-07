import React from 'react'
import "./Main.css"
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import {RiSearchLine} from 'react-icons/ri'
import {BsFire} from 'react-icons/bs'
import {AiOutlineRight} from 'react-icons/ai'

const Main = () => {

  return (
    <div className='main-container'>
      <div className="search-bar">
        <p className='left-arrow'><BsArrowLeft/></p>
        <p className='right-arrow'><BsArrowRight/></p>
        <div className="input-address">
        <RiSearchLine/>
          <input type="search"
          className='inputField'
          placeholder='Search for artists, songs and ...'
           />
        </div>
      </div>

      <div className="trending">
        <h2 className="trending-text">What's hot <BsFire/></h2>
        <div className="trending-zone">
          <h2 className="trending-header">Trending</h2>
          <div className='icon-section'>
          <h3 className='trending-icons'> More</h3><span><AiOutlineRight/> </span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Main