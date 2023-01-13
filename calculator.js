
var displayValue = 0;
var operator;
var result = 0;
var operand1 = 0;
var operand2;
var n =1;
var x =1;
var y=1;

var firstTime;

const button1 = document.getElementById("1");
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const button0 = document.getElementById("ten");
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonMultiply = document.getElementById('times');
const buttonDivide = document.getElementById('dividedBy');
const buttonAC = document.getElementById('AC');
const buttonBack = document.getElementById('back');
const buttonDot = document.getElementById('dot');



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
buttonBack.addEventListener('click', () => backButton());
buttonDot.addEventListener('click', () => { n = 10});

function allClearButton()   {

    var operand1 = undefined;
    var operand2 = undefined;
    var operator;
    var result = 0;
    console.log(result, operand1, operand2);
    displayValue = 0;
    display.textContent = displayValue;
}


function operatorButton(op)       {

   operator = op; 
  if (typeof(firstTime) === "undefined" )  {

  


 
    console.log(operator + typeof(operand2));
    operand1 = displayValue;
    console.log("operand 1 is" + operand1);
    console.log("operand 2 is"  + operand2)
    display.textContent = operator;
    displayValue = 0;
    firstTime = 1;
    oldOperator = op;
    n = 1;
    x = 1;
    y=1;
    //operand2 = 0;
  }

  else {
    operand2 = displayValue;

    operand1 = operate(operand1, operand2, oldOperator);

    console.log('operand1 is now '  + operand1);
    console.log('operand2 is now '  + operand2);
    displayValue = 0;
    display.textContent = operand1 + operator
    oldOperator = op;
  }

}




function equalsButton() {
    operand2 = displayValue;
    console.log('operand2 is' + operand2)
    operate(operand1, operand2, operator);
    firstTime = undefined;
    operand1 = displayValue;
}

function numberButton(num)  {
   // displayValue = num
    
    displayNumber(num)
    //n = n/10;
}

function displayNumber(num)    {

   // console.log('calling  displayNumber function');
    displayValue = (((displayValue * 10) + num/x)/n);
    console.log(displayValue)
    display.textContent = displayValue;
    if (n>1){x = x*10;} ;
    y ++;

    
   
}

function backButton() {
    displayValue = Math.floor(displayValue/10);
    //divide by 10
    //round to int
    display.textContent = displayValue;
}
 



function operate(operand1, operand2, operator)  {
    

    if (operator === '+')   {
        console.log('operator is' + operator);
        result = operand1 + operand2;

    }
    else if (operator === '-')  {
        console.log('operator is' + operator);
        
        result = operand1 - operand2;
    }

    else if (operator === '*')  {
        console.log('operator is' + operator);
        result = operand1 * operand2;
    }
    else if (operator ===  '/') {
        
         console.log('operator is' + operator);
        result = (operand1 / operand2).toPrecision(12) ;
       
       
    }

    
    console.log('result' + result);
   
    displayValue = result;
    display.textContent = displayValue; 
    if (result == Infinity )    {display.textContent = "Don't be an idiot"}
    operand1 = result;
    operand2 = null;
     console.log('operand1' + operand1);
    console.log('operand2' + operand2);
    return result


    //main function goes here

}