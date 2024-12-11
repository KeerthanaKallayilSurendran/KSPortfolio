import React from 'react'
import codewhiz from '../assets/projects/CodeWhiz.png'
import nike from '../assets/projects/Nike Clone.png'
import Portfoli from '../assets/projects/Portfolio.png'
import { useNavigate } from 'react-router-dom'
const RecentWork = () => {
  const navigate = useNavigate()
  const recentWorks = [
    {
      workName: 'CodeWhiz',
      workImg: codewhiz
    },
    {
      workName: 'Nike Clone',
      workImg: nike
    },
    {
      workName: 'Portfolio',
      workImg: Portfoli
    }
  ]
  return (
    <div className='container'>
    <div className='text-center'>
      <h1>Recent Works</h1>
      <p style={{color:"#3b264f"}}>Some of the noteworthy projects I have built:</p>
    </div>
    <div className='row pt-5'>
      {
        recentWorks?.map(work=>(
          <div className='col-lg-4 d-flex flex-column align-items-center'>
          <img width={"400px"} height={"auto"} src={work.workImg} alt="" />
          <h2>{work.workName}</h2>
        </div>
        ))
      }
    </div>
    <div className='d-flex justify-content-center align-items-center pt-5'>
    <a onClick={() => navigate('/projects')} style={{backgroundColor:"#3b264f"}} className='btn text-light fs-5'>View All Projcts</a>
    </div>
    
  </div>
  )
}

export default RecentWork