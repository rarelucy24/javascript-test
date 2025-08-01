const assert = require('assert');
const {
  createPersonInfo,
  calculateAge,
  formatFullName,
  checkAdult,
  convertTemperature,
  createGreeting
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
log(`${colors.bold}Testing Exercise 1: Variables and Data Types${colors.reset}`, 'blue');
log('='.repeat(50), 'blue');

let passedTests = 0;
let totalTests = 0;

// Test 1: createPersonInfo
totalTests++;
if (runTest('Task 1: createPersonInfo()', () => {
  const result = createPersonInfo();
  assert.strictEqual(typeof result, 'object', 'Should return an object');
  assert.strictEqual(result.name, 'Alex Johnson', 'Name should be "Alex Johnson"');
  assert.strictEqual(result.age, 28, 'Age should be 28');
  assert.strictEqual(result.city, 'New York', 'City should be "New York"');
  assert.strictEqual(result.isEmployed, true, 'isEmployed should be true');
})) passedTests++;

// Test 2: calculateAge
totalTests++;
if (runTest('Task 2: calculateAge()', () => {
  assert.strictEqual(calculateAge(1990), 34, 'calculateAge(1990) should return 34');
  assert.strictEqual(calculateAge(2000), 24, 'calculateAge(2000) should return 24');
  assert.strictEqual(calculateAge(2010), 14, 'calculateAge(2010) should return 14');
  assert.strictEqual(calculateAge(2024), 0, 'calculateAge(2024) should return 0');
})) passedTests++;

// Test 3: formatFullName
totalTests++;
if (runTest('Task 3: formatFullName()', () => {
  assert.strictEqual(formatFullName('John', 'Doe'), 'John Doe', 'Should format "John Doe"');
  assert.strictEqual(formatFullName('Jane', 'Smith'), 'Jane Smith', 'Should format "Jane Smith"');
  assert.strictEqual(formatFullName('Alex', 'Johnson'), 'Alex Johnson', 'Should format "Alex Johnson"');
})) passedTests++;

// Test 4: checkAdult
totalTests++;
if (runTest('Task 4: checkAdult()', () => {
  assert.strictEqual(checkAdult(18), true, 'Age 18 should be adult');
  assert.strictEqual(checkAdult(25), true, 'Age 25 should be adult');
  assert.strictEqual(checkAdult(17), false, 'Age 17 should not be adult');
  assert.strictEqual(checkAdult(16), false, 'Age 16 should not be adult');
  assert.strictEqual(checkAdult(0), false, 'Age 0 should not be adult');
})) passedTests++;

// Test 5: convertTemperature
totalTests++;
if (runTest('Task 5: convertTemperature()', () => {
  assert.strictEqual(convertTemperature(0), 32, '0°C should be 32°F');
  assert.strictEqual(convertTemperature(100), 212, '100°C should be 212°F');
  assert.strictEqual(convertTemperature(25), 77, '25°C should be 77°F');
  assert.strictEqual(convertTemperature(-10), 14, '-10°C should be 14°F');
})) passedTests++;

// Test 6: createGreeting
totalTests++;
if (runTest('Task 6: createGreeting()', () => {
  assert.strictEqual(createGreeting('John', 'morning'), 'Good morning, John!', 'Should create morning greeting');
  assert.strictEqual(createGreeting('Sarah', 'afternoon'), 'Good afternoon, Sarah!', 'Should create afternoon greeting');
  assert.strictEqual(createGreeting('Mike', 'evening'), 'Good evening, Mike!', 'Should create evening greeting');
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
