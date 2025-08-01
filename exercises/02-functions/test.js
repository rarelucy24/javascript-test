const assert = require('assert');
const {
  add,
  multiply,
  greetUser,
  calculateTotal,
  createCounter,
  processNumbers
} = require('./exercise.js');

// ANSI color codes for terminal output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runTest(testName, testFunction) {
  try {
    testFunction();
    log(`✅ ${testName}`, 'green');
    return true;
  } catch (error) {
    log(`❌ ${testName}`, 'red');
    log(`   Error: ${error.message}`, 'red');
    return false;
  }
}

// Test Suite
log(`${colors.bold}Testing Exercise 2: Functions${colors.reset}`, 'blue');
log('='.repeat(50), 'blue');

let passedTests = 0;
let totalTests = 0;

// Test 1: add function
totalTests++;
if (runTest('Task 1: add()', () => {
  assert.strictEqual(add(2, 3), 5, 'add(2, 3) should return 5');
  assert.strictEqual(add(10, 15), 25, 'add(10, 15) should return 25');
  assert.strictEqual(add(-5, 3), -2, 'add(-5, 3) should return -2');
  assert.strictEqual(add(0, 0), 0, 'add(0, 0) should return 0');
})) passedTests++;

// Test 2: multiply arrow function
totalTests++;
if (runTest('Task 2: multiply() (arrow function)', () => {
  assert.strictEqual(multiply(2, 3), 6, 'multiply(2, 3) should return 6');
  assert.strictEqual(multiply(4, 5), 20, 'multiply(4, 5) should return 20');
  assert.strictEqual(multiply(-2, 3), -6, 'multiply(-2, 3) should return -6');
  assert.strictEqual(multiply(0, 10), 0, 'multiply(0, 10) should return 0');
})) passedTests++;

// Test 3: greetUser with default parameter
totalTests++;
if (runTest('Task 3: greetUser() (default parameter)', () => {
  assert.strictEqual(greetUser('John'), 'Hello, John!', 'greetUser("John") should return "Hello, John!"');
  assert.strictEqual(greetUser('Sarah'), 'Hello, Sarah!', 'greetUser("Sarah") should return "Hello, Sarah!"');
  assert.strictEqual(greetUser(), 'Hello, Guest!', 'greetUser() should return "Hello, Guest!"');
})) passedTests++;

// Test 4: calculateTotal
totalTests++;
if (runTest('Task 4: calculateTotal()', () => {
  assert.strictEqual(calculateTotal(100, 0.08), 108, 'calculateTotal(100, 0.08) should return 108');
  assert.strictEqual(calculateTotal(50, 0.1), 55, 'calculateTotal(50, 0.1) should return 55');
  assert.strictEqual(calculateTotal(200, 0.05), 210, 'calculateTotal(200, 0.05) should return 210');
  assert.strictEqual(calculateTotal(75, 0), 75, 'calculateTotal(75, 0) should return 75');
})) passedTests++;

// Test 5: createCounter (closure)
totalTests++;
if (runTest('Task 5: createCounter() (closure)', () => {
  const counter1 = createCounter();
  assert.strictEqual(counter1(), 1, 'First call should return 1');
  assert.strictEqual(counter1(), 2, 'Second call should return 2');
  assert.strictEqual(counter1(), 3, 'Third call should return 3');
  
  const counter2 = createCounter();
  assert.strictEqual(counter2(), 1, 'New counter should start at 1');
  assert.strictEqual(counter1(), 4, 'Original counter should continue from where it left off');
})) passedTests++;

// Test 6: processNumbers (callback)
totalTests++;
if (runTest('Task 6: processNumbers() (callback)', () => {
  const double = (x) => x * 2;
  const square = (x) => x * x;
  const addOne = (x) => x + 1;
  
  assert.deepStrictEqual(processNumbers([1, 2, 3], double), [2, 4, 6], 'Should double each number');
  assert.deepStrictEqual(processNumbers([2, 3, 4], square), [4, 9, 16], 'Should square each number');
  assert.deepStrictEqual(processNumbers([5, 10, 15], addOne), [6, 11, 16], 'Should add one to each number');
  assert.deepStrictEqual(processNumbers([], double), [], 'Should handle empty array');
})) passedTests++;

// Summary
log('\n' + '='.repeat(50), 'blue');
log(`${colors.bold}Test Results${colors.reset}`, 'blue');
log('='.repeat(50), 'blue');
log(`Passed: ${passedTests}/${totalTests}`, passedTests === totalTests ? 'green' : 'yellow');

if (passedTests === totalTests) {
  log('\n🎉 All tests passed! Great work!', 'green');
  log('You can now move on to the next exercise.', 'green');
} else {
  log(`\n⚠️  ${totalTests - passedTests} test(s) failed. Keep working on it!`, 'yellow');
  log('Check the error messages above and fix your code.', 'yellow');
}

// Exit with appropriate code
process.exit(passedTests === totalTests ? 0 : 1);
