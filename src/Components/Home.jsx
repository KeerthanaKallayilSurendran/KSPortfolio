import React from 'react'
import HomeImg from '../assets/home.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Home = () => {
  const [text] = useTypewriter({
    words:['MEAN Stack Developer', 'MERN Stack Developer'],
    loop:true,
    typeSpeed: 100, 
    deleteSpeed: 50, 
    delaySpeed: 1000,
  })
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-lg-6 d-flex flex-column justify-content-center ">
            <h1 className='main-head'>
                Hi, I'm Keerthana
            </h1>
            <p className="fs-4 fw-bolder mt-3">
            I'm a <span className="text-[#3b264f]">{text}</span>
            <span>
              <Cursor />
            </span>
          </p>
            <div>
                <p><i class="fa-solid fa-location-dot"></i> Ernakulam</p>
            </div>

        </div>
        <div className="col-lg-6">
          <div className='d-flex align-items-center'>
            <img width={"500px"} src={HomeImg} alt="" />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home