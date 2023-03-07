import React from 'react'
import Asidebar from '../AsideBar/Asidebar'
import Navbar from '../Navbar/Navbar'
import Main from '../MainSection/Main'


const Overview = () => {
  return (
    <div className='container'>
      <Navbar/> 
      <Main/>
      <Asidebar/>
    </div>
  )
}

export default Overview