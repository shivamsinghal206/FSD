import React,{useEffect,useState} from 'react'

function Fetchproducts() {

    useEffect(()=>{
        function fetchdata(){
            try{

            }
            catch(e){
                console.log("Error is"+e)
            }finally{

            }

        }
        fetchdata();

    },[])
return (
    <div>Fetchproducts</div>
)
}

export default Fetchproducts