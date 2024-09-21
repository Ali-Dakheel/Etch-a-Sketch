
function intialLoad(){
    let container = document.querySelector('#container');
    for(let i=0; i<256;i++){
        divs = document.createElement('div');
        divs.classList.add('sketch');
        divs.setAttribute('style','width: calc(100% / 16);');
        container.appendChild(divs);    
    }
    let gridItems = document.querySelectorAll('.sketch');
    gridItems.forEach(div => {
        div.addEventListener('mouseenter', () => {
            if(!div.style.backgroundColor){
            div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            }
        });
    });
    
    document.querySelector('.reset').addEventListener('click',()=>{
        gridItems.forEach(div=>{
            div.style.backgroundColor = '';
        });
    });

    document.querySelector('.square').addEventListener('click', () => {
        gridItems.forEach(div=>{
            div.remove();
        });   
        let input = prompt('Enter how man squares per side');
        if(input>100 ||input<0){
            alert('MI BOMBOCLAT');
        }
        else{
            for(let i=0;i<input*input;i++){
                divs = document.createElement('div');
                divs.classList.add('sketch');
                divs.setAttribute('style',`width: calc(100% / ${input});`);
                container.appendChild(divs);    
            }
            let newItems = document.querySelectorAll('.sketch');
            newItems.forEach(div => {
                div.addEventListener('mouseenter', () => {
                    if(!div.style.backgroundColor){
                    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                    }
                });
            });
            document.querySelector('.reset').addEventListener('click',()=>{
                newItems.forEach(div=>{
                    div.style.backgroundColor = '';
                });
            });
        
        }
    });
    
        
}

intialLoad();