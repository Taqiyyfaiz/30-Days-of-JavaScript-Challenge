// Day 5: Functions

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOdd(numbers) {
    if (numbers % 2 === 0) {
        console.log(`${numbers} is Even`);
    } else {
        console.log(`${numbers} is Odd`);
    }
}
checkEvenOdd(7) // Output: 7 is Odd

// Task 2: Write a function to calculate the square of a number and return the result.
function sqaureNumber(n) {
    return n * n;
}
console.log(sqaureNumber(7)); // Output: 49

// Activity 2: Function Expression
// Task 3: Write a Function Expression to find the max of two numbers and log the result to the console.
const MaxNum = function (a, b) {
    if (a > b) {
        console.log(`${a} is greater than ${b}`);
    } else {
        console.log(`${b} is greater than ${a}`);
    }
}
MaxNum(6, 9) // Output: 9 is greater than 6

// Task 4: write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (str1, str2) {
    return str1 + str2;
}
console.log(concatenateStrings("Taqiyy", "Faiz")); // Output: TaqiyyFaiz
console.log(concatenateStrings("Hello", "World")); // Output: HelloWorld

// Activity 3: Arrow Functions 
// Task 5: Write a arrow functions to calculate the sum of two numbers and return the Result.
const sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(11, 69)); // Output: 80

// Task 6: Write a arrow function to check if a string contains a specific character and return a boolean value.
const charcheck = (str, charcheck) => {
    return str.includes(charcheck)
}
console.log(charcheck("Taqiyy", "q")); // Output: true
console.log(charcheck("Faiz", "q")); // Output: false


// Activity 4: Function Parameters and Default Values 

// Task 7: Write a Function that takes two Parameters and returns their product.provide a default value for the second parameter.

// The Second Parameter 'y' has a defult value of '5'. this means that if the function is called with only one argument, 'y' will be default to '5'
function Multiply(x, y = 5) { 
    return x * y;
}
console.log(Multiply(9));
// output: 45

// Task 8: Write a function that a persons name and age and returns a greeting message. provide a default value for the age.


// Defines function name 'greet' that takes 
function greet(name = "Guest") {
    return `Hello Welcome to New Journey of Learing JavaScript, ${name}!`;
}
console.log(greet("Faiz"));
// Output: Hello Welcome to New Journey of Learing JavaScript, Faiz!

// Activity 5: Higher- Order Functions
// Task 9: Write a higher order function that takes a function and a number, and calls the function that many times 

function repeatfunctions(fn, times) {
    for (let i = 0; i < times; i++) {
        // Calling fn on each loop(iteration)
        fn();
        
    }
}
repeatfunctions(() => console.log("Hello World!"), 3);
// output: Hello World! printed 3 times

// Task 10: Write a higher- order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function composeFunctions(fn1, fn2, val) {
    return fn2(fn1(val))
}
function toUpperCase(str) {
    return str.toUpperCase();
}

function appendExclamation(str) {
    return str + '!';
}

const result3 = composeFunctions(toUpperCase, appendExclamation, 0 )
console.log(result3);