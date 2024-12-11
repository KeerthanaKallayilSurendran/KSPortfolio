import React from 'react'
import Logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className='container'> 
      <div className='d-flex justify-content-center align-items-center'>
        <img width={"100px"} src={Logo} alt="" />
      </div>
      <div className='d-flex justify-content-center py-3'>
        <a className='pe-3' style={{textDecoration:"none", color:"#3b264f", fontSize:"25px"}} href="https://www.linkedin.com/in/keerthana-kallayil-surendran/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
        <a className='pe-3' style={{textDecoration:"none", color:"#3b264f", fontSize:"25px"}} href="https://github.com/KeerthanaKallayilSurendran" target='_blank'><i class="fa-brands fa-github"></i></a>
      </div>
      <hr />
      <div  className='d-flex justify-content-center align-items-center'>
      <p>Designed and coded by @keerthana</p>
      </div>
    </div>
  )
}

export default Footer