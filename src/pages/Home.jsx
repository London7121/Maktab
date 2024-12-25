import React from 'react'
import About from './About'
import Teachers from './Teachers'
import Galereya from './Galereya'
import News from './News'
import Qabul from './Qabul'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      {/* <h1>Bosh Sahifa</h1> */}
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
