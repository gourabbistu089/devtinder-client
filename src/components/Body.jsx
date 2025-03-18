import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Body() {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body