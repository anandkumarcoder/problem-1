const inputOne = document.querySelector('.inputOne');
const inputTwo = document.querySelector('.inputTwo');

const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const outputDiv = document.querySelector('.output')
const clear = document.querySelector('.clear')


// console.log(addBtn , subtractBtn ,multiplyBtn ,divideBtn);
clear.addEventListener('click' , ()=> {
    location.reload()
})

// const  = console.log(inputOne.value)
function addInput() {
    let numberOne = Number(inputOne.value)
    let numberTwo = Number(inputTwo.value)

  

     sum = numberOne+ numberTwo
     outputDiv.innerText = `sum of two input is ${sum}`;

     if (numberOne == '' && numberTwo == '') {
        outputDiv.innerText = "please put in all the values"
    }

    

    
}


addBtn.addEventListener ('click',  addInput )


function subInput() {
    let numberOne = Number(inputOne.value)
    let numberTwo = Number(inputTwo.value)

   

    if( numberOne > numberTwo){
        subtract = numberOne-numberTwo;
        outputDiv.innerText = `differnece between two input is ${subtract}`;

    } else {
        subtract= numberTwo-numberOne;
        outputDiv.innerText = `differnece between two input is ${subtract}`;
    }

    if (numberOne == '' && numberTwo == '') {
        outputDiv.innerText = "please put in all the values"
    }
    
}



subtractBtn.addEventListener ('click',  subInput )




function multiplyInput() {
    let numberOne = Number(inputOne.value)
    let numberTwo = Number(inputTwo.value)

   

     multiply = numberOne * numberTwo;
     outputDiv.innerText = `product of two input is ${multiply}`;

     if (numberOne == '' && numberTwo == '') {
        outputDiv.innerText = "please put in all the values"

    }
    
}



multiplyBtn.addEventListener ('click',  multiplyInput )


function divideInput() {
    let numberOne = Number(inputOne.value)
    let numberTwo = Number(inputTwo.value)

   

     divide = numberOne/numberTwo;
     outputDiv.innerText = `division of two input is ${divide}`;

     
     if (numberOne == '' && numberTwo == '') {
        outputDiv.innerText = "please put in all the values"

    }
}



divideBtn.addEventListener ('click',  divideInput );

