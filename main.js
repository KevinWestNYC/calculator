//function to get numbers and operators
// function to calculate result
//function to clear
//function to put result to result area

// const one = document.getElementById("1-button");
// const two = document.getElementById("2-button");
// const three = document.getElementById("3-button");
// const four = document.getElementById("4-button");
// const five = document.getElementById("5-button");
// const six = document.getElementById("6-button");
// const seven = document.getElementById("7-button");
// const eight = document.getElementById("8-button");
// const nine = document.getElementById("9-button");
// const zero = document.getElementById("0-button");
// const decimal = document.getElementById("decimal-button");
// const divide = document.getElementById("divide-button");
// const multiply = document.getElementById("multiply-button");
// const minus = document.getElementById("minus-button");
// const add = document.getElementById("add-button");
// const equals = document.getElementById("equals-button");
// const clear = document.getElementById("clear-button");

let numberA = 0;
let numberB = 0;
let numberC = 0;
let operatorA = null;
let operatorB = null;

let calculatorButton = document.querySelectorAll(".button")
for (i = 0; i < calculatorButton.length; i++) {
    calculatorButton[i].addEventListener('click', getNumberAndOperatorFromCalculator);
}

function getNumberAndOperatorFromCalculator (){
    let calculatorInput = this.textContent;
    let number
    let operator

    if(isNaN(calculatorInput) === false || calculatorInput === "."){
    number = document.getElementById("result").textContent += calculatorInput;
    
        } else {
    document.getElementById("result").textContent = null;
    operator = calculatorInput;
    }
}


    // 1 get the first number to equal numberA and display
    // 2 get the arithmetic operator and make it equal operatorA
    // 3 get the second number equal numberB and display
    // 4 then, based on the arithmetic operator pressed after numberB:
    //     a* if operatorB is =, display the solution and make it equal numberA, then back to step2
    //     b* if operatorB is + or - , display the total(which becomes the next numberA) and then the third number input becomes numberB, is displayed, then back to step 4 
    //     c* if operatorB is / or x , await numberC to do the operation on numberB and numberC:
    //         5a* if +, -, or = is pressed, operate on the 3 numbers to equal the new numberA, then back to step 2
    //         5b* if / or x is pressed, multiply or divide numberB and number C to create new numberB, then back to step 4

    // make sure only one "." registers per number
    // make sure there is only one operator at a time
    // Press C to delete all inputs at any time

        // if(numberA === 0){
    //     numberA = number;
    // } else if(numberA !==0 && numberB===0){
    //     numberB = number;
    // }
    // if(operatorA === null){
    //     operatorA = operator;
    // } else if(operatorA !== null && operatorB === null){
    //     operatorB = operator;
    // 