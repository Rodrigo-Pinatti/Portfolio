import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import Animacion from 
import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio/Inicio.jsx'
import Proyectos from './Proyectos/Proyectos.jsx'
import SobreMi from './SobreMi/SobreMi.jsx'
import Menu from './Menu/Menu.jsx'

function App() {
  
  return (
      <div>
        <Menu/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/proyectos' element={<Proyectos/>}/>
          <Route path='/sobremi' element={<SobreMi/>}/>
        </Routes>
      </div>
  )
}

export default App
