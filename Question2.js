const input = document.querySelector('#input');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const outputDiv = document.querySelector('.output');



let currTextSize = 15;


function increaseSize(){

    currTextSize = currTextSize + 2

    if(input.value==""){
        outputDiv.innerText = 'field cannot be empty';
    } else{
    
    outputDiv.style.fontSize = currTextSize + 'px'
    outputDiv.innerText = `${input.value}`;
}
}


plusBtn.addEventListener('click', increaseSize);



function decreaseSize(){

    currTextSize = currTextSize - 2

    if(input.value==""){
        outputDiv.innerText = 'field cannot be empty';
    } else{
    
    outputDiv.style.fontSize = currTextSize + 'px'
    outputDiv.innerText = `${input.value}`;
}
}
minusBtn.addEventListener('click',decreaseSize )

