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
import Myuseffect from './component/Myuseeffect'
import Fetchproducts from './Fetchproducts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/login'
import Registration from './component/Registration'
import './App.css'
import Dashboard from './component/Dashboard'
import Home from './component/Home'

function App() {
  return (
      <div >
      {/* <h2>ABES Engineering College</h2> */}
      
      {/* <Icardgallery></Icardgallery> */}
      {/* <Mystate/> */}
      {/* <Colorchange/> */}
      {/* <Name/> */}
      {/* <Imagemanipulation/> */}
      {/* <Myuseffect/> */}
      {/* <Fetchproducts/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/Login' element={<Login/>}></Route> 
      <Route path='Registration' element={<Registration/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>


      </div>
  )
  
}

export default App
