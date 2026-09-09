const root= document.getElementById('container');
console.log(root)
const button= document.getElementById('btn');
const h2= document.createElement('h2');
const img= document.createElement('img');
const newdiv= document.createElement('newdiv');

function showData(){
    // alert('hii');
    try{
    h2.innerText='Welcome to dom';
    h2.style.color='red';
    h2.style.backgroundColor='yellow';
    img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Y0gi55HZHJ_9Tqz9Za1lSjwwoYuNknsLv6snN2eO7w&s=10';
    img.setAttribute('height','200px');
    img.setAttribute('width','200px');
    newdiv.appendChild(h2);
    newdiv.appendChild(img);
    root.style.border='2px solid black';
    root.appendChild(newdiv);
    btn.remove();
    }
    catch(e){
        console.log(e);
    }finally{
    }
}
btn.addEventListener('click',showData);