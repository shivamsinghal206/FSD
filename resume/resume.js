const container = document.getElementById('container');
const button = document.getElementById('btn');
const h4=document.createElement('h4');
        console.log(h4)
        h4.innerText='ABES ENGINEERING COLLEGE';
console.log(button)
console.log(container)

    function ping() {
    container.innerHTML = '<h2>Shivam Singhal</h2>';
    container .appendChild(h4);

    }

button.addEventListener('click',ping);