import React from 'react'
import {useState} from 'react'

function Imagemanipulation() {
    const[catheight,setCatheight]=React.useState(200);
    const[catwidth,setCatwidth]=React.useState(200);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
    function increaseheight(){
        setCatheight(catheight+10);
    }
    function increasewidth(){
        setCatwidth(catwidth+10);
    }
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
return (
    <div>
        <h2>Imagemanipulation</h2>
        <div style={{border: '2px solid red',height:'400px',width:'400px',marginLeft:'300px',backgroundColor:`rgb(${red}, ${green}, ${blue})`}}>
            <img src="https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png" alt="" height={catheight} width={catwidth}/>
        </div>
        <div>
            <button onClick={increaseheight}>Increaseheight</button>
            <button onClick={increasewidth}>Increasewidth</button>
        </div>
        <div>
            <button onClick={changered}>changered</button>
            <button onClick={changegreen}>changegreen</button>
            <button onClick={changeblue}>changeblue</button>
        </div>
    </div>
)
}

export default Imagemanipulation