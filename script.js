const input = document.querySelectorAll(".row");
const display = document.querySelector("p");

let operator;
let num1;
let num2;

display.textContent = 0;

input.forEach(inputs => {
    inputs.addEventListener("click", (e) => {
    let target = e.target;

   if(target.id !== "plus" || target.id !== "minus" || target.id !== "divide" || target.id !== "multiply"){
    display.textContent += target.id;
    num1 = target.id;
    console.log(num1)
}
})
})

const add = (num1, num2) => {
    return num1 + num2;
}
const subtract = (num1, num2) => {
    return num1 - num2;
}
const multiply = (num1, num2) => {
    return num1 * num2;
}
const divide = (num1, num2) => {
    return num1 / num2;
}



const operate = (num1, operator, num2) => {
    if(operator == 'plus'){
        return add(num1, num2)
    }if (operator == 'minus'){
        return subtract(num1, num2)
    }if(operator == 'divide'){
        return divide(num1, num2)
    }if(operator == 'multiply'){
        return multiply(num1, num2)
    }
}
