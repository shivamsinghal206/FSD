import React from 'react'
import {useState} from 'react'

function Mystate() {
    const[counter,setCounter]=useState(10);
    function increment(){
        setCounter(counter+10);
    }
    function decrement(){
        setCounter(counter-5);
    }
return (
    <div>mystate
        <h2>counter={counter}</h2>
        <div>
            <button onClick={increment}>Increment</button>
        </div>
        <div>
            <button onClick={decrement}>Decrement</button>
        </div>
    </div>
    

)
}

export default Mystate