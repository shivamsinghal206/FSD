import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Icard from './component/Icard'
import Icardgallery from './component/Icardgallery'
import Mystate from './component/Mystate'
import Colorchange from './component/Colorchange'
import './App.css'

function App() {
  return (
      <div style={{border:'2px solid red', width:'300px', height:'300px'}}>
      <h2>ABES Engineering College</h2>
      
      {/* <Icardgallery></Icardgallery> */}
      {/* <Mystate/> */}
      <Colorchange/>

      </div>
  )
  
}

export default App
