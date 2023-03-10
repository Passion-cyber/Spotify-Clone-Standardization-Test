import React from 'react'
import Asidebar from '../Components/AsideBar/Asidebar'
import Navbar from '../Components/Navbar/Navbar'
import Main from '../Components/MainSection/Main'


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