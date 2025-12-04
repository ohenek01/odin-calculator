const input = document.querySelectorAll("button");
const display = document.querySelector("p");

let operator = null;
let num1 = '';
let num2 = '';
let justCalculated = false;

display.textContent = 0;

input.forEach(inputs => {
    inputs.addEventListener("click", (e) => {
    let target = e.target;
    let isOperator = target.id === "multiply" || target.id === "plus" || target.id === "minus" || target.id === "divide"
    
    if(target.id === "equal"){
        justCalculated = true;
    }
    //calculation happened and next click is a number
    if(justCalculated && !isNaN(target.id)){
        num1 = '';
        num2 = '';
        operator = ''
        display.textContent = '';
        num1 += target.id;
        display.textContent = num1;
        justCalculated = false;
        return;
    }
    //calculation happened and the next click is an operator
    if(justCalculated && isOperator){
        num1 = operate(Number(num1), operator, Number(num2));
        display.textContent = num1;
        justCalculated = false;
        operator = target.id;
        num2 = ''
        return;
    }
    //clear
    if(target.id === "AC"){
        num1 = '';
        num2 = '';
        operator = null;
        display.textContent = 0;
        justCalculated = false;
        return;
    }
    //operator
    if(isOperator){
        operator = target.id;
        return;
    }
    if(target.id === "equal"){
        display.textContent = operate(Number(num1), operator, Number(num2))
        justCalculated = true;
        return;
    }
    if(operator === null){
        num1 += target.id;
        display.textContent = num1;
    }else{
        num2 += target.id;
        display.textContent = num2;
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
    result = num1 / num2;
    return result.toFixed(3)
}



const operate = (num1, operator, num2) => {
    if(operator === 'plus'){
        return add(num1, num2)
    }if (operator === 'minus'){
        return subtract(num1, num2)
    }if(operator === 'divide'){
        return divide(num1, num2)
    }if(operator === 'multiply'){
        return multiply(num1, num2)
    }
}
