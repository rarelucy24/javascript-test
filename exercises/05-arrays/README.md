# Exercise 5: Arrays

## Learning Objectives
By completing this exercise, you will learn:
- How to create and manipulate arrays
- Understanding array methods like push, pop, slice, splice
- Working with array iteration methods (forEach, map, filter, reduce)
- Finding elements in arrays
- Sorting and reversing arrays

## Instructions

Complete the functions in `exercise.js` according to the specifications below. Each function should return the expected result.

### Tasks

1. **createNumberArray()** - Create an array with specific numbers
2. **addToEnd()** - Add an element to the end of an array
3. **removeFromStart()** - Remove and return the first element
4. **findLargest()** - Find the largest number in an array
5. **filterEvenNumbers()** - Filter array to only include even numbers
6. **sumArray()** - Calculate the sum of all numbers in an array

## Testing Your Solution

Run the following command in this directory:
```bash
node test.js
```

You should see green output indicating all tests pass. If you see red output, there are issues to fix.

## Tips

- Arrays are created with square brackets: `[1, 2, 3]`
- Use `push()` to add to the end, `pop()` to remove from end
- Use `unshift()` to add to start, `shift()` to remove from start
- Array methods like `filter()`, `map()`, `reduce()` are very useful
- `Math.max()` can help find the largest number
- Remember that many array methods return new arrays (don't modify original)

## Examples

```javascript
// Creating arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];

// Array methods
numbers.push(6);           // Adds 6 to end
numbers.pop();             // Removes last element
numbers.slice(1, 3);       // Returns [2, 3] (doesn't modify original)

// Array iteration
numbers.forEach(num => console.log(num));
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
```

Good luck! 🚀
