// Day 2: Operators

// Activity 1: Arithmetic Operations
// num1 = 3;
// num2 = 4;
// Task 1: Write a program to add two numbers and log the result to the console.
const ADD = 3 + 4;
console.log(ADD);
// output = 7
/*
Another Method
    console.log(`Sum of Num1 & Num2: ${num1 + num2}`);
*/

// Task 2: Write a program to Subtract two numbers and log the result to the console.
const SUB = 3 - 4;
console.log(SUB);
// output = -1

/*
another method:
    console.log(`Sub of Num1 & Num2: ${num1 - num2}`);
*/

// Task 3: Write a program to Multiply two numbers and log the result to the console.
const MUL = 3 * 4;
console.log(MUL);
// output = 12

/* 
another method:
    console.log(`Mul of Num1 & Num2: ${num1 * num2}`); 
*/


// Task 4: Write a program to Divide two numbers and log the result to the console.
const DIV = 3 / 4;
console.log(DIV);
// output = 0.75

/* 
another method
    console.log(`Div of Num1 & Num2: ${num1 / num2}`); 
*/


// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
const REM = 3 % 4;
console.log(REM);
// output = 3

/* 
another method
    console.log(`Remainder of Num1 & Num2: ${num1 % num2}`);
*/
// ----------------------------------------------------------------------------------------------------

// Acitivity 2: Assignment Operators
let a = 5;
let b = 6;
// Task 6: Use the += operator to add a number to a variable and log the result to the console.
a += 1;
console.log("a = ",a);
// output = a = 6
// Task 7: Use the -= operator to Subtract a number to a variable and log the result to the console.
b -= 1;
console.log("b = ",b);
// output = b = 5

// ----------------------------------------------------------------------------------------------------

// Acitivity 3: Comparison Operators
let Num_a = 15;
let Num_b = 50;

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log(Num_a > Num_b); // output = false
console.log(Num_a < Num_b); // output = true

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log(Num_a >= Num_b); // output = false
console.log(Num_a <= Num_b); // output = true

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log(Num_a == Num_b); // output = false
console.log(Num_a === Num_b); // output = false

// ----------------------------------------------------------------------------------------------------

// Activity 4: Logical Operators
let csk_Score = 200;
let rcb_Score = 195;

// Task 11: Write a program that uses && operator to combine two conditions and log the result to the console
console.log(csk_Score && rcb_Score); 
// output = 195

// Task 12: Write a program that uses || operator to combine two conditions and log the result to the console
console.log(csk_Score || rcb_Score);
// output = 200

// Task 13: Write a program that uses ! operator to combine two conditions and log the result to the console
console.log(!rcb_Score);
// output = false

// ----------------------------------------------------------------------------------------------------

// Acitivity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
let Health = 100;
let result = Health >= 80 ? "Positive" : "Negative";
console.log(result);
// output = Positive