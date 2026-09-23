import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Icard from './component/Icard'
import Icardgallery from './component/Icardgallery'
import Mystate from './component/Mystate'
import Colorchange from './component/Colorchange'
import Name from './component/Name'
import Imagemanipulation from './component/Imagemanipulation'
import './App.css'

function App() {
  return (
      <div style={{border:'2px solid red', width:'1000px', height:'800px'}}>
      {/* <h2>ABES Engineering College</h2> */}
      
      {/* <Icardgallery></Icardgallery> */}
      {/* <Mystate/> */}
      {/* <Colorchange/> */}
      {/* <Name/> */}
      <Imagemanipulation/>

      </div>
  )
  
}

export default App
