import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg px-5 fw-bolder">
            <div class="container">
                <a class="navbar-brand" href="#home">
                    <img height={"50px"} src={Logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#skills">Skills</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#project">Project</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div>
                    <a className='btn btn-dark' href="/CV.pdf"
                    download="My_CV.pdf">CV Download</a>
                </div>
                </div>
                
            </div>
        </nav>

    </div>
  )
}

export default Navbar