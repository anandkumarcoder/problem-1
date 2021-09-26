const input = document.querySelector('#input');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const outputDiv = document.querySelector('.output');

console.log(input.value);

plusBtn.addEventListener('click', function increase() {

    if (input.value == ''){
        outputDiv.innerText = "Please put in values"
    } else {
        outputDiv.innerText = `${input.value}`;
outputDiv.style.fontSize ='3em'}


})


minusBtn.addEventListener('click', ()=> {
    if (input.value == ''){
        outputDiv.innerText = "Please put in values"
    } else {
        outputDiv.innerText = `${input.value}`;
outputDiv.style.fontSize ='0.7em'}
    
    
    })