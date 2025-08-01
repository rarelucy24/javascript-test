# Exercise 1: Variables and Data Types

## Learning Objectives
By completing this exercise, you will learn:
- How to declare variables using `let`, `const`, and `var`
- Understanding different JavaScript data types
- Working with strings, numbers, and booleans
- Basic string and number operations

## Instructions

Complete the functions in `exercise.js` according to the specifications below. Each function should return the expected result.

### Tasks

1. **createPersonInfo()** - Create and return an object with personal information
2. **calculateAge()** - Calculate age from birth year
3. **formatFullName()** - Combine first and last name with proper formatting
4. **checkAdult()** - Determine if someone is an adult (18 or older)
5. **convertTemperature()** - Convert Celsius to Fahrenheit
6. **createGreeting()** - Generate a personalized greeting message

## Testing Your Solution

Run the following command in this directory:
```bash
node test.js
```

You should see green output indicating all tests pass. If you see red output, there are issues to fix.

## Tips

- Pay attention to data types (string, number, boolean)
- Use `const` for values that won't change, `let` for values that will change
- Remember that JavaScript is case-sensitive
- String concatenation can be done with `+` or template literals (backticks)
- Don't forget to `return` values from your functions

## Example

```javascript
// Example of variable declaration and usage
const firstName = "John";
let age = 25;
const isStudent = true;

// Template literal example
const message = `Hello, ${firstName}! You are ${age} years old.`;
```

Good luck! 🚀
