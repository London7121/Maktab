import React from 'react'
import About from './About'
import Teachers from './Teachers'
import Galereya from './Galereya'
import News from './News'
import Qabul from './Qabul'
import Contact from './Contact'
import '../App.css'

const Home = () => {
  return (
    <div className=''>
      <About />
      <Teachers />
      <News />
      <Galereya />
      <Qabul />
      <Contact />
    </div>
  )
}

export default Home
