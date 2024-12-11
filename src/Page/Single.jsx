import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import Skills from '../Components/Skills'
import RecentWork from '../Components/RecentWork'
import Contact from '../Components/Contact'
import Navbar from '../Components/Navbar'
const Single = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <RecentWork />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Single