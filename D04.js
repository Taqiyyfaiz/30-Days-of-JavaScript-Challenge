// Day 4: Loops

// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let num = 0; num <= 10; num++) {
    const element = num;
    console.log(element); 
}
// Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 12; i++) {
        console.log(`5 * ${i} = ${5*i}`);
    }
/*
|5 * 1 = 5 | 
|5 * 2 = 10| 
|5 * 3 = 15|
|5 * 4 = 20|
|5 * 5 = 25|
|5 * 6 = 30|
|5 * 7 = 35|
|5 * 8 = 40|
|5 * 9 = 45|
|5 * 10 = 50|
|5 * 11 = 55|
|5 * 12 = 60|
*/

// --------------------------------------------------------------------------------------------------------------------

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using while loop.
let sum = 0;
let num = 10;

while (num >= 1) {
    /*
The while loop continues to run as long as num is greater than or equal to 1. This condition ensures that the loop will iterate from 10 down to 1.
*/
    sum += num; // Add the current number to the sum
    num--; // Decrease the number by 1
    /*
    In the first iteration, num is 10, so 10 is added to sum (making sum = 10), and num is decremented to 9.

    In the second iteration, num is 9, so 9 is added to sum (making sum = 19), and num is decremented to 8.

    This process continues until num reaches 1.
    */
    console.log(`The sum of numbers from 10 to 1 is: ${sum}`);
}
// output: 10,19, 27, 34, 40, 45, 49, 52, 54, 55.

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let Num = 10;

while (Num >= 1) {
    console.log(Num);
    Num--;
}
// Output: 10 to 1

// -------------------------------------------------------------------------------------------------------------------------------

// Activity 3: Do...While Loop
// Task 3: Write a program to print the numbers from 1 to 5 using a do..while loop.

let Number = 1;

do {
    console.log(Number);  // Print the current number
    Number++;   // Increase the number by 1
} while (Number <= 5);
// Output: 5 to 1

// ------------------------------------------------------------------------------------------------------------------------

// Activity 4: Nested Loop
// Task 7: Write a program to print a pattern using nested for loops

let n = 4;

for (let i = 1; i <= n; i++) {  // Outer loop for number of rows
    let row = ' ';
    for (let j = 1; j <= i; j++) {  // Inner loop for number of columns
        row += '*';
    }
    console.log(row);
}
/* output: *
           **
           ***
           ****
*/        

// -------------------------------------------------------------------------------------------------------------------------------

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10 but skip the number 5 using continue statement.
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        continue;  // Skip the rest of the loop when num is 5
    }
    console.log(`Num from 1 to 10 ${index}`);
}
// output: 1 to 10 but number 5 will skip and move on to 6

// Task 9: Write a program to print numbers from 1 to 10 but skip stop the loop when the number is 7 using break statement.

for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        // break; Stop the rest of the loop when num is 7
    }
    console.log(i);
}
// output: 1 to 6