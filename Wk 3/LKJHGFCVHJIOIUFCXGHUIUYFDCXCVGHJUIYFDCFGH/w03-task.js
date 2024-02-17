
/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Expression - Subtract Numbers */
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    return document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Arrow Function - Multiply Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}
function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    return document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => document.querySelector('#product').value = multiply(Number(document.querySelector('#factor1').value), Number(document.querySelector('#factor2').value));

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers() {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    return document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotal() {
    let total = Number(document.querySelector('#subtotal').value);
    if (document.querySelector('#member').checked) {
        total = total * 0.8;
    }
    return document.querySelector('#total').textContent = '$' + total.toFixed(2);
}
document.querySelector('#getTotal').addEventListener('click', getTotal);

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = numbersArray;
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 == 1);
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 == 0);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */ document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number); document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
