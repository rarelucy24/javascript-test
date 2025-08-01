// Exercise 2: Functions - SOLUTION
// This file contains the complete solutions for instructor reference

/**
 * Task 1: Add Function
 * Create a function that adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Task 2: Multiply Function (Arrow Function)
 * Create an arrow function that multiplies two numbers
 * Use arrow function syntax: const multiply = (a, b) => { ... }
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
const multiply = (a, b) => {
  return a * b;
};
// Alternative shorter syntax:
// const multiply = (a, b) => a * b;

/**
 * Task 3: Greet User with Default Parameter
 * Create a function that greets a user with a default name
 * If no name is provided, use "Guest" as the default
 * @param {string} name - The user's name (default: "Guest")
 * @returns {string} Greeting message in format "Hello, [name]!"
 */
function greetUser(name = "Guest") {
  return `Hello, ${name}!`;
}

/**
 * Task 4: Calculate Total with Tax
 * Create a function that calculates the total price including tax
 * @param {number} price - The base price
 * @param {number} taxRate - The tax rate (as a decimal, e.g., 0.08 for 8%)
 * @returns {number} The total price including tax
 */
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
  // Alternative: return price * (1 + taxRate);
}

/**
 * Task 5: Create Counter (Closure)
 * Create a function that returns another function
 * The returned function should increment and return a counter
 * Each call to the returned function should increase the counter by 1
 * @returns {function} A function that increments and returns a counter
 */
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
  
  // Alternative arrow function syntax:
  // return () => ++count;
}

/**
 * Task 6: Process Numbers (Callback Function)
 * Create a function that takes an array of numbers and a callback function
 * Apply the callback function to each number in the array
 * @param {number[]} numbers - Array of numbers to process
 * @param {function} callback - Function to apply to each number
 * @returns {number[]} New array with processed numbers
 */
function processNumbers(numbers, callback) {
  // Method 1: Using map()
  return numbers.map(callback);
  
  // Method 2: Using a for loop
  /*
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  return result;
  */
  
  // Method 3: Using for...of loop
  /*
  const result = [];
  for (const number of numbers) {
    result.push(callback(number));
  }
  return result;
  */
}

// Export functions for testing
module.exports = {
  add,
  multiply,
  greetUser,
  calculateTotal,
  createCounter,
  processNumbers
};
