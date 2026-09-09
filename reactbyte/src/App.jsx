import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Icard from './component/Icard'
import Icardgallery from './component/Icardgallery'
import './App.css'

function App() {
  return (
      <div style={{border:'2px solid red', width:'300px', height:'300px'}}>
      <h2>Abes Engineering College</h2>
      
      <Icardgallery></Icardgallery>

      </div>
  )
  
}

export default App
