import React from 'react'
import {useState} from 'react'

function Colorchange() {
    function changered(){
        setRed(255);
        setGreen(0);
        setBlue(0);
    }
    function changegreen(){
        setRed(0);
        setGreen(255);
        setBlue(0);
    }
    function changeblue(){
        setRed(0);
        setGreen(0);
        setBlue(255);
    }
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
  return (
    <div>
        <div style={{width:'100px', height:'100px', backgroundColor:`rgb(${red}, ${green}, ${blue})`}}>

        </div>
        <button onClick={changered} >Red</button>
        <button onClick={changegreen}>Green</button>
        <button onClick={changeblue}>Blue</button>
    </div>
  )
}

export default Colorchange