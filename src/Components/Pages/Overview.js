import React from 'react'
import Asidebar from '../AsideBar/Asidebar'
import Navbar from '../Navbar/Navbar'
import Main from '../MainSection/Main'


const Overview = ({setToken}) => {
  return (
    <div className='container'>
      <Navbar setToken={setToken}/> 
      <Main/>
      <Asidebar/>
    </div>
  )
}

export default Overview