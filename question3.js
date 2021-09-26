const input = document.querySelector('.input');
const headingOne = document.querySelector('#h1');
const headingTwo = document.querySelector('#h2');
const headingThree = document.querySelector('#h3');
const headingFour = document.querySelector('#h4');
const outputDiv = document.querySelector('.output');


const outputChange = (tag , value)=>{
    if (value == ""){
        outputDiv.innerText = `field cannot be empty`;
    } else {
        outputDiv.innerHTML = `<${tag}> ${value} </${tag}> `
    }
}

headingOne.addEventListener('click', ()=> {
    outputChange("h1" , input.value)
})

headingTwo.addEventListener('click', ()=> {
    outputChange("h2" , input.value)
})

headingThree.addEventListener('click', ()=> {
    outputChange("h3" , input.value)
})


headingFour.addEventListener('click', ()=> {
    outputChange("h4" , input.value)
})






// headingOne.addEventListener('click', () =>{
//     if(input.value == ""){
//         outputDiv.innerText = "field cannot be empty";
//     } else {
//         outputDiv.innerHTML = `<h1>${input.value} </h1>`;

//     }
// })


// headingTwo.addEventListener('click', () =>{
//     if(input.value == ""){
//         outputDiv.innerText = "field cannot be empty";
//     } else {
//         outputDiv.innerHTML = `<h2>${input.value} </h2>`

//     }
// })

// headingThree.addEventListener('click', () =>{
//     if(input.value == ""){
//         outputDiv.innerText = "field cannot be empty";
//     } else {
//         outputDiv.innerHTML = `<h3>${input.value} </h3>`

//     }
// })

// headingFour.addEventListener('click', () =>{
//     if(input.value == ""){
//         outputDiv.innerText = "field cannot be empty";
//     } else {
//         outputDiv.innerHTML = `<h4>${input.value} </h4>`

//     }
// })