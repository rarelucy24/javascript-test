# Setup Instructions for JavaScript Fundamentals Course

## For Students

### Prerequisites
Before starting this course, make sure you have:
- **Node.js** installed (version 14 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`
- **A code editor** (VS Code recommended)
  - Download from: https://code.visualstudio.com/
- **Basic terminal/command line knowledge**

### Getting Started

1. **Download the Course**
   - Download or clone this repository to your computer
   - Extract the files if downloaded as a ZIP

2. **Open in Your Code Editor**
   - Open the entire `javascript-fundamentals-course` folder in VS Code
   - This will give you access to all exercises and files

3. **Verify Node.js Installation**
   ```bash
   node --version
   npm --version
   ```

4. **Start with Exercise 1**
   - Navigate to `exercises/01-variables/`
   - Read the `README.md` file carefully
   - Open `exercise.js` and complete the functions
   - Test your work: `node test.js`

### Workflow for Each Exercise

1. **Read the Instructions**
   - Each exercise folder has a detailed `README.md`
   - Understand what you need to accomplish

2. **Complete the Exercise**
   - Open the `exercise.js` file
   - Fill in the TODO sections
   - Don't modify the export statements at the bottom

3. **Test Your Solution**
   ```bash
   cd exercises/01-variables
   node test.js
   ```

4. **Check Results**
   - ✅ Green output = Success! Move to next exercise
   - ❌ Red output = Fix the errors and try again

5. **Get Help if Stuck**
   - Review the README.md for hints
   - Check the examples provided
   - Ask your instructor for help

### Running Tests

#### Individual Exercise
```bash
# Navigate to the exercise directory
cd exercises/01-variables
# Run the test
node test.js
```

#### All Exercises (from project root)
```bash
# Run all exercise tests
npm test
# or
npm run test:all
```

#### Specific Exercise (from project root)
```bash
npm run test:exercise 01-variables
npm run test:exercise 02-functions
npm run test:exercise 05-arrays
```

## For Instructors

### Course Structure
- Each exercise is self-contained in its own directory
- Students work through exercises sequentially
- Automated testing provides immediate feedback
- Solution files are provided for reference

### Grading and Assessment
- Use the test runner to check student progress
- Solution files contain multiple approaches for teaching
- Tests cover edge cases and common mistakes
- Clear error messages guide student learning

### Adding New Exercises
1. Create a new directory: `exercises/XX-topic-name/`
2. Add required files:
   - `README.md` - Instructions and learning objectives
   - `exercise.js` - Student template with TODO sections
   - `test.js` - Comprehensive test suite
   - `solution.js` - Complete solution for reference

### Customization
- Modify difficulty levels in existing exercises
- Add bonus challenges for advanced students
- Adjust test cases based on class needs
- Create additional exercises following the same pattern

### Troubleshooting Common Issues

#### "Module not found" errors
- Ensure students are in the correct directory
- Check that `exercise.js` exists and has proper exports

#### Tests not running
- Verify Node.js is installed correctly
- Check file permissions
- Ensure no syntax errors in student code

#### Students stuck on concepts
- Review the README.md examples
- Use solution.js to show different approaches
- Encourage experimentation and testing

## Course Progression

1. **01-variables** - Data types, variable declarations
2. **02-functions** - Function syntax, parameters, closures
3. **03-conditionals** - If/else, logical operators (to be added)
4. **04-loops** - For/while loops, iteration (to be added)
5. **05-arrays** - Array methods, manipulation
6. **06-objects** - Object creation, properties (to be added)

## Support

If you encounter any issues with the course setup or exercises, please contact your instructor or check the main README.md file for additional guidance.

Happy coding! 🚀
