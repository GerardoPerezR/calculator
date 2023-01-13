
var displayValue = 0;
var operator;
var result = 0;

const button1 = document.getElementById("1");
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const button0 = document.getElementById("0");
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonMultiply = document.getElementById('times');
const buttonDivide = document.getElementById('dividedBy');
const buttonAC = document.getElementById('AC');


const buttonEquals = document.getElementById('equals');


const display = document.getElementById('screen');
display.textContent = displayValue;   

button0.addEventListener('click', () => numberButton(0));
button1.addEventListener('click', () => numberButton(1));
button2.addEventListener('click', () => numberButton(2));
button3.addEventListener('click', () => numberButton(3));
button4.addEventListener('click', () => numberButton(4));
button5.addEventListener('click', () => numberButton(5));
button6.addEventListener('click', () => numberButton(6));
button7.addEventListener('click', () => numberButton(7));
button8.addEventListener('click', () => numberButton(8));
button9.addEventListener('click', () => numberButton(9));
buttonPlus.addEventListener('click', () => operatorButton('+'));
buttonMinus.addEventListener('click', () => operatorButton('-'));
buttonMultiply.addEventListener('click', () => operatorButton('*'));
buttonDivide.addEventListener('click', () => operatorButton('/'));
buttonEquals.addEventListener('click', () => equalsButton());
buttonAC.addEventListener('click', () => allClearButton());

function allClearButton()   {

    displayValue = 0;
    display.textContent = displayValue;
}


function operatorButton(op)       {
    operator = op; 
    console.log(operator);
    operand1 = displayValue;
    console.log("operand 1 is" + operand1);
    display.textContent = operator;
    displayValue = 0;


}



function minusButton()      {
    operator = '-'; console.log(operator)


}

function multiplyButton()   {
    operator = '*'; console.log(operator)

}

function divideButton()     {
    operator = '/'; console.log(operator)

}

function equalsButton() {
    operand2 = displayValue;
    console.log('operand2 is' + operand2)
    operate(operand1, operand2, operator);
}

function numberButton(num)  {
   // displayValue = num
    
    displayNumber(num)
}

function displayNumber(num)    {

    console.log('calling  displayNumber function');
    displayValue = (displayValue * 10) + num;
    console.log(displayValue)
    display.textContent = displayValue;
}

function back() {
    //divide by 10
    //round to int
}
 



function operate(operand1, operand2, operator)  {

    if (operator === '+')   {
        console.log('operator is' + operator);
        result = operand1 + operand2;

    }
    else if (operator === '-')  {
        console.log('operator is' + operator);
        result = 'resultado de la resta';
        result = operand1 - operand2;
    }

    else if (operator === '*')  {
        console.log('operator is' + operator);
        result = operand1 * operand2;
    }
    else if (operator ===  '/') {
        console.log('operator is' + operator);
        result = operand1 / operand2;
    }

    
    console.log('result' + result);
    displayValue = result;
    display.textContent = displayValue;
    return result


    //main function goes here

}