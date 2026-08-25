// console.log("hello")
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,15))
// const squaresum=(a,b)=>{return Math.sqrt(a)+Math.sqrt(b)}
// console.log(squaresum(4,9))


// (()=>{
//     console.log("heyy..using IIFE")
// })
// let a=23;
// if(a<40){
//     let a=40;
//     console.log("value of a inside if block is "+a)
// }
// console.log("value of a outside if block is "+a)
// function sum(a,b){
//     return a+b;
// }
// functionmsgwithsum(clbk,msg){
//     const result=clbk(10,15);
//     console.log("hii"+msg+"your result is="+result)
// }
// msgwithsum(sum,"shivam")
// function login(error,msg){
//     if(error){
//         console.log("error"+error)
//     }else{
//         console.log(msg)
//     }
// }
// function loginhandler(username,password,clbk){
//     if(username=="shivam" && password=="12345"){
//         clbk(null,"login successfull")
//     }else{
//         clbk("username or password is incorrect",null)
//     }
// }
// loginhandler("shivam","123456",login)
// console.log("one")
// for(i=0;i<10000;i++){
//     console.log("i="+i)
// }
// console.log("three")
const container=document.getElementById("container");
const button=document.getElementById("btn");
        const h1=document.createElement('h1');
        console.log(h1)
        h1.innerText='ABES ENGG COLLEGE';
console.log(button)
console.log(container)
const loader=document.createElement('h2');
container.appendChild(loader);
const img=document.createElement('img');

        function ping(){
        // alert('server is pinging')
        try{
        loader.innerHTML='<h2> Loading data</h2>'
        container.innerHTML='<h2> welcome to dom</h2>'
        h1.style.color='red';
        h1.style.backgroundColor='cyan';
        container.appendChild(h1);
        img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAC1kBFD8UgsOayMBHWl9pktJkSO1BuY7ZpdVGmLUMg&s=10";
        img.setAttribute('height',200);
        img.setAttribute('width',200);
        container.appendChild(img);
        }
        catch(e){
                loader.innerHTML='<h2style=color:red>Error in loadingdata<h2>'
        }finally{
                container.removeChild(loader);
        }


} 
button.addEventListener('click',ping);

