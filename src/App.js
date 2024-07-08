import React from 'react'
import './App.css';
import {Box} from '@mui/material'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ExerciseDetail from './pages/ExerciseDetail'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
const App = () => {
  return (
    <Box width="400px"  sx={{ width: { xl: '1488px' } }} m="auto">
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
       </Routes>
       <Footer/>
    </Box>
  )
}

export default App