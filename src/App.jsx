// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import AxiosHome from './Pages/AxiosHome'
import AxiosAbout from './Pages/AxiosAbout'
import { Routes,Route } from 'react-router-dom'
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
      <Route path='/' element = {<AxiosHome/>}></Route>
       <Route path='/about' element = {<AxiosAbout/>}></Route>
      </Routes>
    </div>
  )
}

export default App


