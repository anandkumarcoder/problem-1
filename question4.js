const input = document.querySelector('.input');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

const outputDiv = document.querySelector('.output');


const outputChange = ( value  )=>{
    if (value == ""){
        outputDiv.innerText = `field cannot be empty`;
    
        } else {
        outputDiv.innerText= `  ${value} `
        // outputDiv.style.color = "red",
    }
}

red.addEventListener('click', ()=> {
    outputChange(  input.value )
    outputDiv.style.color = "red";
})

blue.addEventListener('click', ()=> {
    outputChange(  input.value )
    outputDiv.style.color = "blue";
})

green.addEventListener('click', ()=> {
    outputChange(  input.value )
    outputDiv.style.color = "green";
})