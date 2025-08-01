# Exercise 2: Functions

## Learning Objectives
By completing this exercise, you will learn:
- How to create functions with different syntaxes
- Understanding function parameters and return values
- Working with function scope and closures
- Using arrow functions and function expressions
- Handling default parameters

## Instructions

Complete the functions in `exercise.js` according to the specifications below. Each function should return the expected result.

### Tasks

1. **add()** - Create a function that adds two numbers
2. **multiply()** - Create a function using arrow syntax that multiplies two numbers
3. **greetUser()** - Create a function with default parameters
4. **calculateTotal()** - Function that calculates total with tax
5. **createCounter()** - Function that returns another function (closure)
6. **processNumbers()** - Function that takes a callback function as parameter

## Testing Your Solution

Run the following command in this directory:
```bash
node test.js
```

You should see green output indicating all tests pass. If you see red output, there are issues to fix.

## Tips

- Functions can be declared using `function` keyword or arrow syntax `=>`
- Arrow functions: `const myFunc = (param) => { return result; }`
- Default parameters: `function greet(name = "World") { ... }`
- Functions can return other functions (closures)
- Functions can accept other functions as parameters (callbacks)
- Pay attention to scope - variables declared inside functions are local

## Examples

```javascript
// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Function with default parameter
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Function returning a function (closure)
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
```

Good luck! 🚀
