import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Navbart from './components/Navbart'
import Signin from './pages/Signin'
import "./App.css"

const App = () => {
  return (
    <>
    <Navbart/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App