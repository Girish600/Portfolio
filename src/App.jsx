import React from 'react'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Expeirence from './components/Expeirence'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/expeirence" element={<Expeirence />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App