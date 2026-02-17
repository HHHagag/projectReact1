import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbarcomponents from './NavBar'

export default function Layout() {
  return (
    <>
    <div className='d-flex flex-column justify-content-between min vh-100'>
     
    <Navbarcomponents/>
    
        <div className='flex-grow-1'>
            <Outlet/>
        </div>
   
    <Footer/>
     </div>
    </>
  )
}
