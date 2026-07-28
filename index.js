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
function login(error,msg){
    if(error){
        console.log("error"+error)
    }else{
        console.log(msg)
    }
}
function loginhandler(username,password,clbk){
    if(username=="shivam" && password=="12345"){
        clbk(null,"login successfull")
    }else{
        clbk("username or password is incorrect",null)
    }
}
loginhandler("shivam","123456",login)
