// Day 7: Objects
// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with propertise like Title, author, and year, and log the object to the console.
const book =  {
    Title:"Atomic Habits",
    Author: "James Clear",
    Year: 2018
}
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log("Title:", book.Title);
console.log("Author:", book.Author);

// ------------------------------------------------------------------------------------------------------------

// Activity 2: Object Methods
// Task 3: Add a method to the object that returns a string with the book's titile and author, and log the result of calling this method


const book1 =  {
    Title:"Atomic Habits",
    Author: "James Clear",
    Year: 2018,
    // we add a method 'getSummary'. This method is a function that returns a string.
    getSummary: function () {
        return `${this.Title} by ${this.Author}`;
    }
};
const book2 =  {
    Title:"Attitude is Everything",
    Author: "XYZ",
    Year: 2020,
    // we add a method 'getSummary'. This method is a function that returns a string.
    getSummary: function () {
        return `${this.Title} by ${this.Author}`;
    }
};
console.log(book1.getSummary());
console.log(book2.getSummary());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.year = 2024;
console.log(book);

//--------------------------------------------------------------------------------

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects). and log the library object to the console
const library = {
    name:"myLibrary",
    books: [book1, book2]
}
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in library.
console.log(`The Library name is ${library['name']}`);
for (const element of library.books) {
    console.log(element);
}
// --------------------------------------------------------------------------------

// Activity 4: The this keyword
// Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the books title and year and log the result of calling this method. 
book.getTitleAndYear = function() {
    return `${this.Title}  (${this.year})`;
};
console.log(book.getTitleAndYear());
// Actvity 5: Object Iteration
// Task 8: Use a 'for...in' loop to iterate over the properties of the book object and log each property and its value.
for (let property in book) {
    console.log(`${property} : ${book[property]}`);
}
// Task 9: Use 'Object..keys' and 'Object.values' methods to log all the keys and values of the book object
console.log("Keys: ", Object.keys(book));
console.log("Values: ", Object.values(book));