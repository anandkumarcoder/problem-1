const input = document.querySelector('.input');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

const outputDiv = document.querySelector('.output');


const outputChange = (tag, value) => {
        if (value == "") {
            outputDiv.innerText = `field cannot be empty`;

        } else {
            outputDiv.innerHTML = `<${tag}> ${value}  </${tag}>`
        
    }
}

red.addEventListener('click', ()=> {
    outputChange( "div style= color:red", input.value );
    
})

blue.addEventListener('click', ()=> {
    outputChange( "div style= color:blue", input.value );
    
})

green.addEventListener('click', ()=> {
    outputChange( "div style= color:green", input.value );
   
})