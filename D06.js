//  Day 6: Arrays

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const myArray = [1, 2, 3, 4, 5] 
console.log(myArray);

// Task 2: Access the first and last element of the array and log them to console.
console.log(`Access the first element of array: ${myArray[0]}`);

console.log(`Access the last element of array: ${myArray[4]}`);
// --------------------------------------------------------------------------------------------------------------------------------
// Activity 2: Array Methods (Basic)
// Task 3: use the 'push' method to add new number to the end of the array and log the updated array
myArray.push(6);
console.log(myArray);

// Task 4: use the 'pop' method to remove the last element from the array and log the updated array
myArray.pop(6);
console.log(myArray);

// Task 5: use the 'shift' method to remove the first element from the array and log the updated array
myArray.shift(0)
console.log(myArray);

// Task 6: use the 'unshift' method to add a new number to the beginning of the array and log the updated array
myArray.unshift(1)
console.log(myArray);
// ------------------------------------------------------------------------------------------------------------------------------
// Activity 3: Array Methods (Intermediate)
// Task 7: Use the 'map' method to create a new array where each number is doubled and log the new array.

// Original Array
const numbers = [6, 7, 8, 9, 10];
// Use map to create a ew array with each number doubled
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  // Output: [12, 14, 16, 18, 20]


// Task 8: Use the 'filter' method to create a new array with only even numbers and log the new array.
const filter = numbers.filter(num => num % 2 == 0)
console.log(filter); // Output: [2, 4, 6, 8, 10]

// Task 9: Use the 'reduce' method to calculate the sum of all  numbers in the array and log the result.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use reduce to calculate the sum of all numbers in array
const sum = num.reduce((accumulator, cuurrentValue) => accumulator + cuurrentValue, 0);

console.log(sum);  // Output: 55

// --------------------------------------------------------------------------------------------------------------------------------------
// Activity 4: Array Operation
// Task 10: Use a 'for' loop to iterate over the array and log each element to the console.
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
}

// Task 11: Use a 'forEach' method to iterate over the array and log each element to the console.

// 'forEach' takes a callback function number => console.log(number) and applies it to each element in the array.
numbers.forEach(number => console.log(number));
// -------------------------------------------------------------------------------------------------------------------------------------
// Activity 5: Multi-dimensional Arrays.
// Task 12: Create a two - dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.
const specificElement = matrix[1][2];
console.log(specificElement);