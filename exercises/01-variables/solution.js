// Exercise 1: Variables and Data Types - SOLUTION
// This file contains the complete solutions for instructor reference

/**
 * Task 1: Create Person Info
 * Create and return an object with the following properties:
 * - name: "Alex Johnson"
 * - age: 28
 * - city: "New York"
 * - isEmployed: true
 */
function createPersonInfo() {
  const person = {
    name: "Alex Johnson",
    age: 28,
    city: "New York",
    isEmployed: true
  };
  return person;
}

/**
 * Task 2: Calculate Age
 * Given a birth year, calculate and return the current age
 * Assume current year is 2024
 * @param {number} birthYear - The year the person was born
 * @returns {number} The calculated age
 */
function calculateAge(birthYear) {
  const currentYear = 2024;
  return currentYear - birthYear;
}

/**
 * Task 3: Format Full Name
 * Combine first and last name with proper formatting
 * @param {string} firstName - The first name
 * @param {string} lastName - The last name
 * @returns {string} Full name in format "FirstName LastName"
 */
function formatFullName(firstName, lastName) {
  return firstName + " " + lastName;
  // Alternative solution using template literals:
  // return `${firstName} ${lastName}`;
}

/**
 * Task 4: Check Adult Status
 * Determine if a person is an adult (18 years or older)
 * @param {number} age - The person's age
 * @returns {boolean} true if adult (18+), false otherwise
 */
function checkAdult(age) {
  return age >= 18;
}

/**
 * Task 5: Convert Temperature
 * Convert temperature from Celsius to Fahrenheit
 * Formula: F = (C × 9/5) + 32
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} Temperature in Fahrenheit
 */
function convertTemperature(celsius) {
  return (celsius * 9/5) + 32;
}

/**
 * Task 6: Create Greeting
 * Generate a personalized greeting message
 * @param {string} name - The person's name
 * @param {string} timeOfDay - "morning", "afternoon", or "evening"
 * @returns {string} Greeting in format "Good [timeOfDay], [name]!"
 */
function createGreeting(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
  // Alternative solution using string concatenation:
  // return "Good " + timeOfDay + ", " + name + "!";
}

// Export functions for testing
module.exports = {
  createPersonInfo,
  calculateAge,
  formatFullName,
  checkAdult,
  convertTemperature,
  createGreeting
};
