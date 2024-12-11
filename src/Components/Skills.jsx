import React from 'react'
import HTML from '../assets/HTML.png'
const Skills = () => {
  const skills = [
    {
      skillName:'HTML',
      skillImg:'https://img.icons8.com/?size=100&id=20909&format=png&color=000000'
    },
    {
      skillName:'CSS',
      skillImg:'https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000'
    },
    {
      skillName:'Bootstrap',
      skillImg:'https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000'
    },
    {
      skillName: 'Tailwind',
      skillImg: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000'
    },
    {
      skillName: 'JavaScript',
      skillImg: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000'
    },
    {
      skillName: 'React',
      skillImg: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000'
    },
    {
      skillName: 'Angular',
      skillImg: 'https://img.icons8.com/?size=100&id=6SWtW8hxZWSo&format=png&color=000000'
    },
    {
      skillName: 'Node.js',
      skillImg: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000'
    },
    {
      skillName: 'Express.js',
      skillImg: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000'
    },
    {
      skillName: 'MongoDB',
      skillImg: 'https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000'
    },
    {
      skillName: 'Figma',
      skillImg: 'https://img.icons8.com/?size=100&id=W0YEwBDDfTeu&format=png&color=000000'
    },
    {
      skillName: 'Git',
      skillImg: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000'
    }
  ]
  return (
    <div className='container'>
      <div className='text-center mt-5'>
        <h1>Skills & Tools</h1>
        <p style={{color:"#3b264f"}}>The skills, tools and technologies I am really good at:</p>
      </div>
      <div className='row gap-3'>
        {
          skills?.map(skill=>(
            <div className=' col-lg-2 d-flex align-items-center flex-column'>
              <img src={skill.skillImg} alt="" />
              <h6 className='main-head fs-5'>{skill.skillName}</h6>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills