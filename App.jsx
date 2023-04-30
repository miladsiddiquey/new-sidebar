import React from 'react'
import '../src/App.css'
import Sidebar from './pages/global/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'

export default function App() {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </Sidebar>
    </div>
  )
}
