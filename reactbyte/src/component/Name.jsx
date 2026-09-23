import React from 'react'
import {useState} from 'react'

function Name() {
    function changename(){
        setUsername("Shivam Singhal");
    }
    function changeclgname(){
        setClgname("ABES ENGINEERING COLLEGE");
    }

    const[username,setUsername]=useState("Rahul");
    const[clgname,setClgname]=useState("ABES");
return (
    <div>
        <h2>Name: {username}</h2>
        <h2>College: {clgname}</h2>
        <button onClick={changename}>Change Name</button>
        <button onClick={changeclgname}>Change College Name</button>
    </div>
)
}

export default Name