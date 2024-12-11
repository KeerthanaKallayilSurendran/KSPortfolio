import './App.css'
import Single from './Page/Single'
import Projects from './Page/Projects'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Single/> }/>
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
