//function to get numbers and operators
// function to calculate result
//function to clear
//function to confirm only one "." registers per number
//function to confirm there is only one operator at a time
//function to put result to result area

/////////Logic/////////
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


// let resultDisplay = document.getElementById("result").textContent;
let firstOperand = '';
let secondOperand = '';
let operator = '';

let result = 0;


document.querySelectorAll('.number-button')
.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        const number = numberButton.textContent;
        
        if(!operator) {
            firstOperand += number;
            document.getElementById("result").textContent = firstOperand;
        }

        if(firstOperand && operator){
            secondOperand += number;
            document.getElementById("result").textContent = secondOperand;
        }
       
        console.log('firstOperand', firstOperand);
        console.log('secondOperand', secondOperand);
        console.log('*******')
    })
})


document.querySelectorAll('.operator-button')
.forEach(operatorButton => {
    operatorButton.addEventListener('click', (e) => {
    const selectedOperator = e.target.textContent;
    if(secondOperand){
        
        calculate(firstOperand, secondOperand, operator);
        operator = selectedOperator;
        firstOperand = result;
        secondOperand = '';
        document.getElementById("result").textContent = result;
        return
    }
    if(firstOperand) {
        operator = selectedOperator;
        document.getElementById("result").textContent = null;
    }
    
 
    console.log('operator:', operator);
    console.log('operator:', operator);
    console.log('firstOperand',firstOperand);
    
    console.log('result', result)
    console.log('*******')
    })
})

document.querySelector('#equals-button')
.addEventListener('click', () =>{
    calculate(firstOperand, secondOperand, operator);
    operator = '';
    secondOperand = '';
    firstOperand = result;
})

document.querySelector('#decimal-button')
.addEventListener('click', function(){
    if (document.getElementById("result").textContent.indexOf('.') == -1 && !operator){
        document.getElementById("result").textContent += '.';
        firstOperand += '.'
      } else if (document.getElementById("result").textContent.indexOf('.') == -1 && firstOperand && operator){
        document.getElementById("result").textContent += '.';
        secondOperand += '.'
    }
})


document.querySelector('#clear-button')
.addEventListener('click', () => {
    firstOperand = '';
    secondOperand = '';
    operator = '';
    document.getElementById("result").textContent = null;
    console.log('clear');
})

function calculate(firstOperand, secondOperand, operator){
    
    switch(operator){
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }
    
    document.getElementById("result").textContent = result;
    
    
    console.log('*******')
    console.log('firstOperand',firstOperand);
    console.log('secondOperand',secondOperand);
    console.log('operator', operator);
    console.log('result', result)
    console.log('*******')

};
