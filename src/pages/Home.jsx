import React from 'react'
import About from './About'
import Teachers from './Teachers'
import Galereya from './Galereya'
import News from './News'
import Qabul from './Qabul'
// import Leaders from './Leaders'
import Contact from './Contact'
import '../App.css'
import LeaderAndChief from './LeaderAndChief'

const Home = () => {
  return (
    <div className=''>
      <About />
      <LeaderAndChief />
      {/* <Leaders /> */}
      <Teachers />
      <News />
      <Galereya />
      <Qabul />
      <Contact />
    </div>
  )
}

export default Home
