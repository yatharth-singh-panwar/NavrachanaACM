import './App.css'
import { Landing } from './pages/Landing'
import { Team } from './pages/Team'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='Team' element={<Team/>}/>
      </Routes>    
    </BrowserRouter>  

    </>
  )
}

export default App
