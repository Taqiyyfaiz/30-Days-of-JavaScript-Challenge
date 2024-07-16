// Day 1: Variables & DataTypes

// Activity 1: Variables Declaration

// Task 1: Declare a variable using var, assign it a number, log the value to the console
var Target = 207;
console.log(Target) 
// Output: 207

// Task 2: Declare a variable using let, assign it a string, and log the value to the console
let userName = 'Taqiyyfaiz';
console.log(userName)
// Output: Taqiyyfaiz

// Activity 2: Constant Declaration

// Task  3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const emailID = "abc@gmail.com";
console.log(emailID)
// Output: abc@gmail.com

// Activity 3: Data Types 

// Task 4: Create variables of different data types(number, string, boolean, object, array) and log each variable's type using the typeof operator
const Year = 2000;
const Name = "Taqiyy Faiz";
const boolVal = true;
const object = {
    user:"Taqiyy Faiz",
    accountID:"abc@xyzcompany.in",
    Password:"2356@341"
}
const myArr = [0, 1, 2, 3, 4];

console.log(`type of Year: ${typeof (Year)}
            type of Name: ${typeof (Name)}
            type of boolVal: ${typeof (boolVal)}
            type of object: ${typeof (object)}
            typr of myArr: ${typeof (myArr)}
`);
/* Output: 
    type of Year: number
    type of Name: string
    type of boolVal: boolean
    type of object: object
    typr of myArr: object
*/

// Activity 4 : Reassiging variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.assert
let Location = "Chennai";
Location = "Vaniyambadi";
console.log(Location);
// Output: Vaniyambadi

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared wit const and observe the error

const name = "Taqiyy Faiz";
/* name = "MTF";
console.log(name); */ 
// TypeError: Assignment to constant variable.