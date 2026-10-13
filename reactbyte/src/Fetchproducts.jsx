import React,{useEffect,useState} from 'react'

function Fetchproducts() {
    const[Products,setProducts]=useState([]);
    useEffect(()=>{
        async function fetchdata(){
            try{
                const response=await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                console.log(data);
                setProducts(data);
            }
            catch(e){
                console.log("Error is"+e)
            }finally{

            }

        }
        fetchdata();

    },[])
return (
    <div>
      {
        Products.map(ele=>(
            
            <div> 
                <h2>{ele.id}</h2>
                <img src={ele.image} height={180} width={180}/>
                <p>{ele.title}</p>
                <button >Add cart</button>
            </div>
            
        ))
      }
    </div>
  )
}

export default Fetchproducts
