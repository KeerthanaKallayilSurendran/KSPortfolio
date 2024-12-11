import React from 'react'
import Logo from '../assets/logo.png'
import codewhizh from '../assets/projects/CodeWhiz.png'
import Portfolio from '../assets/projects/Portfolio.png'
import notehere from '../assets/projects/NoteHere.png'
import todo from '../assets/projects/TodoApp.png'
import tastebites from '../assets/projects/TasteBites.png'
import weatherapp from '../assets/projects/Weather App.png'
import nike from '../assets/projects/Nike Clone.png'
import youtube from '../assets/projects/Youtube Clone.png'
import travel from '../assets/projects/Travel.png'
import hekto from '../assets/projects/Hekto.png'
import travelguid from '../assets/projects/TravelGuid.png'
import firo from '../assets/projects/FIORELLO.png'
import calculator from '../assets/projects/Calculator.png'

const Projects = () => {
  const works = [
    {
      workName: 'CodeWhiz',
      workImg: codewhizh,
      description: 'CodeWhiz is an online learning platform designed to connect teachers and students for a seamless educational experience. Teachers can: Create and manage courses. Add classes to their courses with relevant materials and schedules. Students can: Browse and view available courses. Enroll in courses of their choice. Access classes and resources shared by teachers. The platform provides an intuitive interface for knowledge sharing and learning, fostering a collaborative digital education environment.',
      tools: ['React', 'MongoDB', 'Node.js', 'Express', 'Tailwind', 'Material UI'],
      github: 'https://github.com/KeerthanaKallayilSurendran/CodeWhizFrontEnd',
      deploy: 'https://code-whiz-front-end.vercel.app/',
    },
    {
      workName: 'Portfolio',
      workImg: Portfolio,
      description: 'This Portfolio Website is a comprehensive digital showcase highlighting an individual’s professional journey, skills, and achievements. It features a Home Page for introductions, a Skills section to display expertise, a Projects area to present completed works, an Experience section outlining career milestones, and a Contact page for easy communication. Designed to be visually appealing and user-friendly, it serves as a powerful tool for personal branding and networking.',
      tools: ['HTML', "CSS", 'JavaScript', 'React', 'Tailwind', 'Framer-Motion'],
      github: 'https://github.com/KeerthanaKallayilSurendran/PortfolioReact',
      deploy: 'https://portfolio-react-beta-roan.vercel.app/',
    },
    {
      workName: 'NoteHere',
      workImg: notehere,
      description: 'This Note-Taking Web App is a simple and efficient tool for managing your personal or professional notes. It allows users to seamlessly add new notes, edit existing ones, and delete notes they no longer need. With an intuitive interface and organized structure, it helps users keep track of ideas, tasks, and important information, making it an ideal solution for productivity and organization.',
      tools: ['HTML', 'CSS', 'Tailwind', 'React', 'Firebase', 'React Quill'],
      github: 'https://github.com/KeerthanaKallayilSurendran/DocApp-Using-React-Firebase',
      deploy: 'https://doc-app-using-react-firebase.vercel.app/',
    },
    {
      workName: 'TodoApp',
      workImg: todo,
      description: 'This To-Do Web App is a streamlined productivity tool designed to help users efficiently manage their tasks. It allows users to add new to-dos, edit task details, mark tasks as complete, and delete tasks that are no longer needed. With a clean and user-friendly interface, it simplifies task tracking and ensures better organization, making it an ideal companion for staying on top of daily responsibilities.',
      tools: ['React', 'Bootstrap', 'HTML', 'CSS', 'Json-Server'],
      github: 'https://github.com/KeerthanaKallayilSurendran/todoAppReactFrontend',
      deploy: 'https://todo-app-react-frontend.vercel.app/',
    },
    {
      workName: 'Taste Bites',
      workImg: tastebites,
      description: 'Taste Bite is a user-friendly app designed for food enthusiasts to explore a variety of recipes and their detailed preparation processes. Users can view step-by-step instructions, ingredient lists, cooking tips, and other essential details to create delicious dishes. With its intuitive design, Taste Bite makes discovering and recreating culinary delights easy and enjoyable for everyone.',
      tools: ['React','Redux','Bootstrap'],
      github: 'https://github.com/KeerthanaKallayilSurendran/recipeReduxTest',
      deploy: 'https://recipe-redux-test.vercel.app/',
    },
    {
      workName: 'Weather App',
      workImg: weatherapp,
      description: 'The Weather App is a simple and efficient tool that fetches live weather data from the OpenWeather API. Users can search for any location to view real-time weather details, including temperature, humidity, wind speed, and overall conditions. With its intuitive interface, the app offers quick access to accurate and up-to-date weather information.',
      tools: ['React', 'Tailwind'],
      github: 'https://github.com/KeerthanaKallayilSurendran/weatherAppReact',
      deploy: 'https://weather-app-react-wheat-pi.vercel.app/',
    },
    {
      workName: "Nike Clone",
      workImg: nike,
      description: 'Nike website Clone',
      tools: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/KeerthanaKallayilSurendran/Nike',
      deploy: 'https://nike-mu-eight.vercel.app/',
    },
    {
      workName: 'Youtube Clone',
      workImg: youtube,
      description: 'Youtube Home Page Clone',
      tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/KeerthanaKallayilSurendran/youtubeClone',
      deploy: 'https://youtube-clone-kappa-seven.vercel.app/',
    },
    {
      workName: 'Travel Tale',
      workImg: travel,
      description: 'Travel Blog Website',
      tools: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/KeerthanaKallayilSurendran/TravelTales',
      deploy: 'https://travel-tales-puce.vercel.app/',
    },
    {
      workName: 'Hekto',
      workImg: hekto,
      description: 'A website designed with the figma template',
      tools: ['HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/KeerthanaKallayilSurendran/Hekto',
      deploy: 'https://hekto-xi.vercel.app/',
    },
    {
      workName: 'Travel Guid',
      workImg: travelguid,
      description: 'Travel Website',
      tools: ['HTML', 'CSS'],
      github: 'https://github.com/KeerthanaKallayilSurendran/travelguide',
      deploy: 'https://travelguide-hazel.vercel.app/',
    },
    {
      workName: 'Fiorello',
      workImg: firo,
      description: 'Flowershop Website',
      tools: ['HTML', 'CSS'],
      github: 'https://github.com/KeerthanaKallayilSurendran/Fiorello',
      deploy: 'https://fiorello.vercel.app/',
    },
    {
      workName: 'Calculator',
      workImg: calculator,
      description: 'Simple Calculator Uisng JavaScript',
      tools: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/KeerthanaKallayilSurendran/CalculatorJS',
      deploy: 'https://calculator-js-rouge.vercel.app/',
    },
  ]
  return (
    <div className='container'>
      <nav class="navbar navbar-expand-lg px-5 fw-bolder">
            <div class="container">
                <a class="navbar-brand" href="#home">
                    <img height={"50px"} src={Logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
      <div className='mt-5 text-center pb-5'>
        <h1>Projects</h1>
        <p>Some of the noteworthy projects I have built:</p>
      </div>
      {
        works?.map(work=>(
          <div className='row mb-5 gap-2'>
          <div className="col-lg-5">
            <img className='rounded' width={"100%"} src={work.workImg} alt="" />
          </div>
          <div className="col-lg-5">
            <h1>{work.workName}</h1>
            <p style={{textAlign:"justify"}}>{work.description}</p>
            <div>
              {
                work.tools.map(tool=>(
                  <button className='btn btn-secondary me-2 mb-2 rounded-pill'>{tool}</button>
                ))
              }
            </div>

            <a style={{textDecoration:"none", color:"#3b264f"}} className='pe-2 ' href={work.github} target='_blank'><i className="fa-solid fa-globe fs-4"></i></a>
            <a style={{textDecoration:"none", color:"#3b264f"}} className='pe-2 ' href={work.deploy} target='_blank'><i className="fa-brands fa-github fs-4"></i></a>
          </div>
      </div>
        ))
      }

      
    </div>

  )
}

export default Projects