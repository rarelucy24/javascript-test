// Exercise 5: Arrays - SOLUTION
// This file contains the complete solutions for instructor reference

/**
 * Task 1: Create Number Array
 * Create and return an array containing the numbers 1, 2, 3, 4, 5
 * @returns {number[]} Array containing [1, 2, 3, 4, 5]
 */
function createNumberArray() {
  return [1, 2, 3, 4, 5];
}

/**
 * Task 2: Add to End
 * Add an element to the end of an array and return the new array
 * Do not modify the original array
 * @param {any[]} array - The original array
 * @param {any} element - The element to add
 * @returns {any[]} New array with element added to the end
 */
function addToEnd(array, element) {
  // Method 1: Using spread operator
  return [...array, element];
  
  // Method 2: Using concat()
  // return array.concat(element);
  
  // Method 3: Using slice() and push()
  // const newArray = array.slice();
  // newArray.push(element);
  // return newArray;
}

/**
 * Task 3: Remove from Start
 * Remove and return the first element from an array
 * Do not modify the original array
 * @param {any[]} array - The original array
 * @returns {any} The first element of the array
 */
function removeFromStart(array) {
  return array[0];
  
  // Alternative: using at() method (newer JavaScript)
  // return array.at(0);
}

/**
 * Task 4: Find Largest
 * Find and return the largest number in an array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The largest number in the array
 */
function findLargest(numbers) {
  // Method 1: Using Math.max with spread operator
  return Math.max(...numbers);
  
  // Method 2: Using reduce()
  // return numbers.reduce((max, current) => current > max ? current : max, numbers[0]);
  
  // Method 3: Using a for loop
  /*
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
  */
}

/**
 * Task 5: Filter Even Numbers
 * Filter an array to only include even numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} New array containing only even numbers
 */
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
  
  // Alternative using for loop
  /*
  const evens = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
  */
}

/**
 * Task 6: Sum Array
 * Calculate and return the sum of all numbers in an array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The sum of all numbers
 */
function sumArray(numbers) {
  // Method 1: Using reduce()
  return numbers.reduce((sum, num) => sum + num, 0);
  
  // Method 2: Using for loop
  /*
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
  */
  
  // Method 3: Using forEach()
  /*
  let sum = 0;
  numbers.forEach(num => sum += num);
  return sum;
  */
}

// Export functions for testing
module.exports = {
  createNumberArray,
  addToEnd,
  removeFromStart,
  findLargest,
  filterEvenNumbers,
  sumArray
};
