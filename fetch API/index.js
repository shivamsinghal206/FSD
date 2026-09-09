const root= document.getElementById('container');
const button= document.getElementById('btn');
const display= document.getElementById('disp');
const loader= document.getElementById('loader');

async function fetchData(){
    //alert('hii') //ye browser ki api ka func. hai
    
    try{
        loader.innerHTML='<h1 style=color:red>Loading Data...</h1>';
        const serverData= await fetch('https://fakestoreapi.com/products');
        const jsonData= await serverData.json();
        // console.log(jsonData[0].title);
        // display.innerHTML=`${jsonData[0].title}`;


        let table=`<table border=2px>
        ${
            jsonData.map((ele)=>(
                `<tr>
                <td><img src=${ele.image} height=180 width=180></img></td>
                <td>${ele.title}</td>
                <td>${ele.description}</td>
                <td>${ele.price}</td>
                <td>${ele.category}</td>
                </tr>
                `
            ))
        }
         
        </table>`
        display.innerHTML=table;
    }
    catch(e){
        console.log("Error is "+e)
    }
    finally{
        loader.innerHTML='';
    }


}
button.addEventListener('click', fetchData);