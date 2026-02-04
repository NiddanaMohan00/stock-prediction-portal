import { useState } from 'react'
import './assets/css/style.css'
import Main from './componen/Main'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './componen/Register'

import Header from './componen/Header'
import Footer from './componen/Footer'
import Login from './componen/Login'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
   
 
    </>
  )
}

export default App
