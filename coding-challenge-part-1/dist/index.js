"use strict";
/**
 * Calculates the sum of integers from 1 to n using a loop.
 *
 * @param {number} n - The positive integer upper limit of the summation.
 * @returns {number} - The sum of integers from 1 to n.
 * @throws {Error} - Throws an error if the input is not a positive integer.
 */
function calculateSum(n) {
    if (n < 1) {
        throw new Error("Input must be a positive integer.");
    }
    let sum = 0;
    // Loop through integers from 1 to n and accumulate the sum
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
const result = calculateSum(5);
console.log(result); // Output: 15
/**
 * Calculates the sum of integers from 1 to n using recursion.
 *
 * @param {number} n - The positive integer upper limit of the summation.
 * @returns {number} - The sum of integers from 1 to n.
 * @throws {Error} - Throws an error if the input is not a positive integer.
 */
function recursiveSum(n) {
    if (n < 1) {
        throw new Error("Input must be a positive integer.");
    }
    // Base case: if n is 1, return 1; otherwise, sum n and the result of the recursive call
    if (n === 1) {
        return 1;
    }
    else {
        return n + recursiveSum(n - 1);
    }
}
const recursiveResult = recursiveSum(5);
console.log(recursiveResult); // Output: 15
/**
 * Calculates the sum of integers from 1 to n using the formula for an arithmetic series.
 *
 * @param {number} n - The positive integer upper limit of the summation.
 * @returns {number} - The sum of integers from 1 to n.
 * @throws {Error} - Throws an error if the input is not a positive integer.
 */
function arithmeticSeriesSum(n) {
    if (n < 1) {
        throw new Error("Input must be a positive integer.");
    }
    // Use the arithmetic series formula to calculate the sum
    return (n * (n + 1)) / 2;
}
const arithmeticResult = arithmeticSeriesSum(5);
console.log(arithmeticResult); // Output: 15
