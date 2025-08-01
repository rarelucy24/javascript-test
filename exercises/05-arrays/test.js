const assert = require('assert');
const {
  createNumberArray,
  addToEnd,
  removeFromStart,
  findLargest,
  filterEvenNumbers,
  sumArray
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
log(`${colors.bold}Testing Exercise 5: Arrays${colors.reset}`, 'blue');
log('='.repeat(50), 'blue');

let passedTests = 0;
let totalTests = 0;

// Test 1: createNumberArray
totalTests++;
if (runTest('Task 1: createNumberArray()', () => {
  const result = createNumberArray();
  assert.deepStrictEqual(result, [1, 2, 3, 4, 5], 'Should return [1, 2, 3, 4, 5]');
  assert.strictEqual(Array.isArray(result), true, 'Should return an array');
})) passedTests++;

// Test 2: addToEnd
totalTests++;
if (runTest('Task 2: addToEnd()', () => {
  const original = [1, 2, 3];
  const result = addToEnd(original, 4);
  assert.deepStrictEqual(result, [1, 2, 3, 4], 'Should add element to end');
  assert.deepStrictEqual(original, [1, 2, 3], 'Should not modify original array');
  
  const result2 = addToEnd(['a', 'b'], 'c');
  assert.deepStrictEqual(result2, ['a', 'b', 'c'], 'Should work with strings');
  
  const result3 = addToEnd([], 'first');
  assert.deepStrictEqual(result3, ['first'], 'Should work with empty array');
})) passedTests++;

// Test 3: removeFromStart
totalTests++;
if (runTest('Task 3: removeFromStart()', () => {
  assert.strictEqual(removeFromStart([1, 2, 3]), 1, 'Should return first element');
  assert.strictEqual(removeFromStart(['a', 'b', 'c']), 'a', 'Should work with strings');
  assert.strictEqual(removeFromStart([42]), 42, 'Should work with single element');
})) passedTests++;

// Test 4: findLargest
totalTests++;
if (runTest('Task 4: findLargest()', () => {
  assert.strictEqual(findLargest([1, 5, 3, 9, 2]), 9, 'Should find largest number');
  assert.strictEqual(findLargest([10, 20, 5, 15]), 20, 'Should find largest number');
  assert.strictEqual(findLargest([-1, -5, -3]), -1, 'Should work with negative numbers');
  assert.strictEqual(findLargest([7]), 7, 'Should work with single element');
})) passedTests++;

// Test 5: filterEvenNumbers
totalTests++;
if (runTest('Task 5: filterEvenNumbers()', () => {
  assert.deepStrictEqual(filterEvenNumbers([1, 2, 3, 4, 5, 6]), [2, 4, 6], 'Should filter even numbers');
  assert.deepStrictEqual(filterEvenNumbers([1, 3, 5]), [], 'Should return empty array if no evens');
  assert.deepStrictEqual(filterEvenNumbers([2, 4, 6]), [2, 4, 6], 'Should return all if all even');
  assert.deepStrictEqual(filterEvenNumbers([]), [], 'Should handle empty array');
  assert.deepStrictEqual(filterEvenNumbers([0, 10, -2, 7]), [0, 10, -2], 'Should handle zero and negatives');
})) passedTests++;

// Test 6: sumArray
totalTests++;
if (runTest('Task 6: sumArray()', () => {
  assert.strictEqual(sumArray([1, 2, 3, 4, 5]), 15, 'Should sum all numbers');
  assert.strictEqual(sumArray([10, 20, 30]), 60, 'Should sum all numbers');
  assert.strictEqual(sumArray([]), 0, 'Should return 0 for empty array');
  assert.strictEqual(sumArray([42]), 42, 'Should work with single element');
  assert.strictEqual(sumArray([-1, 1, -2, 2]), 0, 'Should handle negative numbers');
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
