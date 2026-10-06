import React,{useEffect,useState} from 'react'

function Myuseeffect() {
    const[Counter,setCounter]=useState(0);
    const[Pointer,setPointer]=useState(100);


    function decreasepointer(){
        setPointer(Pointer-1);
    }
    useEffect(()=>{
        console.log(Counter);
        console.log(Pointer);
    },[Pointer])
    function increment(){
        setCounter(Counter+1);
    }
return (
    <div>
        <h2>Counter App</h2>
        <h1 style={{color:'red'}}>Counter: {Counter}</h1>
        <h1 style={{color:'green'}}>Pointer: {Pointer}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decreasepointer}>Decrement pointer</button>
    </div>
)
}

export default Myuseeffect