let container=null;
let divs=null;

for(let i=0; i<256;i++){
container = document.querySelector('#container');
divs = document.createElement('div');
divs.classList.add('sketch');
divs.setAttribute('style','width: calc(100% / 16);');
container.appendChild(divs);    
handleMouse();
}


function handleMouse(){
    const gridItems = document.querySelectorAll('.sketch');
    gridItems.forEach(div => {
        div.addEventListener('mouseenter', () => {
            if(!div.style.backgroundColor){
            div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            }
        });
    });
}

const header = document.querySelector('.header');
const button = document.createElement('button');
button.textContent = 'Squares per side';
header.appendChild(button);
button.addEventListener('click',()=>{
    let input = prompt('number of squares per side');
    gridItems.forEach(div=>{
        div.remove()
    });
    for(let i=0; i<input*input;i++){
        divs = null;
        divs = document.createElement('div');
        divs.classList.add('sketch');
        divs.setAttribute('style',`width:calc(100%/${input});`);
        container.appendChild(divs);    
        handleMouse();
        }
});

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click',()=>{
    gridItems.forEach(div=>{
        div.style.backgroundColor='';
    });
});