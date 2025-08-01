const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TestRunner {
  constructor() {
    this.exercisesDir = path.join(__dirname, '..', 'exercises');
    this.totalTests = 0;
    this.passedTests = 0;
    this.failedTests = 0;
  }

  // ANSI color codes for terminal output
  colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m',
    bold: '\x1b[1m'
  };

  log(message, color = 'reset') {
    console.log(`${this.colors[color]}${message}${this.colors.reset}`);
  }

  getExercises() {
    try {
      return fs.readdirSync(this.exercisesDir)
        .filter(dir => {
          const fullPath = path.join(this.exercisesDir, dir);
          return fs.statSync(fullPath).isDirectory() && dir.match(/^\d{2}-/);
        })
        .sort();
    } catch (error) {
      this.log('Error reading exercises directory', 'red');
      return [];
    }
  }

  runSingleExercise(exerciseName) {
    const exercisePath = path.join(this.exercisesDir, exerciseName);
    const testFile = path.join(exercisePath, 'test.js');

    if (!fs.existsSync(testFile)) {
      this.log(`❌ Test file not found for ${exerciseName}`, 'red');
      return false;
    }

    this.log(`\n${this.colors.bold}Running tests for ${exerciseName}${this.colors.reset}`, 'blue');
    this.log('='.repeat(50), 'blue');

    try {
      const output = execSync(`node "${testFile}"`, { 
        cwd: exercisePath,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log(output, 'green');
      this.passedTests++;
      return true;
    } catch (error) {
      this.log(error.stdout || error.message, 'red');
      this.failedTests++;
      return false;
    }
  }

  runAllExercises() {
    const exercises = this.getExercises();
    
    if (exercises.length === 0) {
      this.log('No exercises found!', 'red');
      return;
    }

    this.log(`${this.colors.bold}JavaScript Fundamentals Course - Test Runner${this.colors.reset}`, 'blue');
    this.log(`Found ${exercises.length} exercises\n`, 'blue');

    exercises.forEach(exercise => {
      this.runSingleExercise(exercise);
      this.totalTests++;
    });

    this.printSummary();
  }

  printSummary() {
    this.log('\n' + '='.repeat(60), 'blue');
    this.log(`${this.colors.bold}TEST SUMMARY${this.colors.reset}`, 'blue');
    this.log('='.repeat(60), 'blue');
    
    this.log(`Total Exercises: ${this.totalTests}`, 'blue');
    this.log(`Passed: ${this.passedTests}`, 'green');
    this.log(`Failed: ${this.failedTests}`, 'red');
    
    if (this.failedTests === 0) {
      this.log('\n🎉 All tests passed! Great work!', 'green');
    } else {
      this.log(`\n⚠️  ${this.failedTests} exercise(s) need attention`, 'yellow');
    }
  }

  run() {
    const args = process.argv.slice(2);
    
    if (args.includes('--all')) {
      this.runAllExercises();
    } else if (args.includes('--exercise')) {
      const exerciseIndex = args.indexOf('--exercise');
      const exerciseName = args[exerciseIndex + 1];
      
      if (!exerciseName) {
        this.log('Please specify an exercise name after --exercise', 'red');
        this.log('Example: npm run test:exercise 01-variables', 'yellow');
        return;
      }
      
      this.totalTests = 1;
      const success = this.runSingleExercise(exerciseName);
      
      if (success) {
        this.log('\n✅ Exercise completed successfully!', 'green');
      } else {
        this.log('\n❌ Exercise needs more work', 'red');
      }
    } else {
      this.runAllExercises();
    }
  }
}

// Run the test runner
const runner = new TestRunner();
runner.run();
