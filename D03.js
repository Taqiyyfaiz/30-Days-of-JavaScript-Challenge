// Day 3: Control Structures 
// Acitivity 1: if-Else Statemets

// Task 1: Write a Program to check if a number is positive, negative, or zero and log the result to console.
let Number = 1088;

if (Number > 1000) {
    console.log("Number is Positive");
} 
else if (Number === 0) {
    console.log("Number is Zero");
} 
else {
    console.log("Number is Negative");
}
// Output: Number is Positive


// Task 2: Write a Program to check if a person is eligible to vote (age >= 18) and log the result to console.
let age = 20;

if (age >= 18) {
    console.log("You are eligible to Vote");
} 
else {
    console.log("You are not eligible to Vote !");
}
// Output: You are eligble to vote

// ----------------------------------------------------------------------------------------------------

// Activity 2: Nested if else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let a = 9;
let b = 90;
let c = 80;

if (a === b) {
    console.log("a is largest of three");
} else if (b <= c) {
    console.log("b is smallest of three");
} else if (c >= a) {
    console.log("c is largest of three");
} else {
    console.log("a b & c are not a largest numbers");
}

// Output: "c is largest of three"

// ----------------------------------------------------------------------------------------------------

// Acitivity 3: Swicth Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

const day = 2;

switch(day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log(`The Provided Day ${day} is invalid`);
}
// Output: Tuesday

// Task 5: Write a program that uses a swicth case to assign a grade (A, B, C, D, F) Based on a Score and log the grade to the console.

let Mark = 95;
let Grade;

switch(true) {
    case ( Mark >= 90 && Mark <= 100):
        Grade = 'A'
        console.log(Grade);
        break;
    case (Mark >= 80 && Mark <= 90):
        Grade = 'B'
        console.log(Grade);
        break;
    case (Mark >= 70 && Mark <= 80):
        Grade = 'C'
        console.log(Grade);
        break;
    case (Mark >= 60 && Mark <= 70):
        Grade = 'D'
        console.log(Grade);
        break;
    case (Mark >= 50 && Mark <= 60):
        Grade = 'F'
        console.log(Grade);
        break;
    default:
            console.log(`The Provided Grade ${Grade} is Invalid !`);
}
// 95 is >= 90 && <= 100 So the Grade is A.
// Output: A.

// ----------------------------------------------------------------------------------------------------
// Acitivity 4: Conditional (Ternary) Operator 
// Task 6: Write a program that uses the ternaru operator to check if a number is even or odd and log the result to the console.
let num = 9;
let result = num % 2 == 0 ? "Odd" : "Even";
console.log(`${num} is ${result}`);
// Output: 9 is Even

// Acitivity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console
let year = 2024;

// Check if the year is divisible by 4
if(year % 4 === 0) {
    //  Check if the year is also divisible by 100
    if(year % 100 === 0 ) {
        // Check if the year is also divisible by 400
        if (year % 400 === 0) {
            console.log(`${year} is a leap year`);
        } else {
            // If divisible by 100 but not by 400, it's not a leap year
            console.log(`${year} is not a leap year`);
        } 
    } else {
        //  If divisible by 4 but not by 100, it's a leap year
        console.log(`${year} is a leap year`);
    }
} else {
    // If not divisible by 4, it's not a leap year
    console.log(`${year} is not a leap year`);
}
