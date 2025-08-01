# JavaScript Fundamentals Course

A comprehensive JavaScript learning course designed to take students from beginner to intermediate level through hands-on exercises and automated testing.

## Course Overview

This course covers essential JavaScript concepts through practical coding exercises:

1. **Variables & Data Types** - Understanding different data types and variable declarations
2. **Functions** - Function creation, parameters, return values, and scope
3. **Conditionals** - Decision making with if/else statements and logical operators
4. **Loops** - Iteration with for loops, while loops, and array traversal
5. **Arrays** - Array creation, manipulation, and common methods
6. **Objects** - Object creation, property access, and methods

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- Basic understanding of programming concepts
- A code editor (VS Code recommended)

### Installation
1. Clone or download this repository
2. Navigate to the project directory
3. Run `npm install` (if additional dependencies are added later)

### How to Use This Course

1. **Start with Exercise 1**: Navigate to `exercises/01-variables/`
2. **Read the Instructions**: Each exercise has a detailed README.md
3. **Complete the Exercise**: Edit the `exercise.js` file
4. **Test Your Solution**: Run `node test.js` in the exercise directory
5. **Check Results**: Green output means success, red means there are issues to fix
6. **Move to Next Exercise**: Once all tests pass, proceed to the next module

### Running Tests

#### Individual Exercise
```bash
cd exercises/01-variables
node test.js
```

#### All Exercises (from project root)
```bash
npm run test:all
```

#### Specific Exercise (from project root)
```bash
npm run test:exercise 01-variables
```

## Course Structure

```
exercises/
├── 01-variables/          # Variables and data types
├── 02-functions/          # Function fundamentals
├── 03-conditionals/       # If/else and logical operators
├── 04-loops/              # For and while loops
├── 05-arrays/             # Array manipulation
└── 06-objects/            # Object fundamentals
```

## For Instructors

- Each exercise includes a `solution.js` file with the complete solution
- Test files provide comprehensive coverage of edge cases
- Exercises are designed to build upon previous concepts
- Difficulty progresses gradually from basic to intermediate

## Tips for Success

1. **Read Error Messages Carefully** - They provide valuable clues
2. **Test Frequently** - Run tests after each small change
3. **Don't Skip Exercises** - Each builds on the previous one
4. **Experiment** - Try different approaches to understand concepts better
5. **Ask Questions** - Don't hesitate to seek help when stuck

## Support

If you encounter issues or have questions about the exercises, please reach out to your instructor.

Happy coding! 🚀
