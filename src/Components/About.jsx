import React from 'react'
import BG from '../assets/Background.png'
import ProfileImg from '../assets/pp.jpg'
const About = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>About Me</h1>
      <div className="row">
        <div className="col-lg-6 position-relative">
          <img src={BG} alt="" />
          <img style={{bottom:"45px", left:"55px"}} className='corner-image position-absolute' height={"300px"} src={ProfileImg} alt="" />
        </div>
        <div style={{textAlign:"justify"}} className="col-lg-6 fs-4">
          <p>i Enjoy creating things that live on the internet. My goal is to always build products that provide pixel-perfect, perfomant experiences.</p>
          <p>Familiarity with Frontend Hig level programming such as HTML, CSS, ReactJS, Angular and JSON server side coding skills Node.js framework Express</p>
        </div>
      </div>
    </div>
  )
}

export default About