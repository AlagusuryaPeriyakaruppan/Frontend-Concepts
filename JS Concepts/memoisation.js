/*

Memoisation is an optimisation technique used to cache the result of an expensive function calls and
and return the cached result when the same input is passed again.

*/

//Example1:

function add(num1) {
  let cache = {};
  if (cache[num1]) {
    return cache[num1];
  } else {
    cache[num1] = num1 + 20;
    return cache[num1];
  }
}

//To avoid performing the same operation again and again we can cache the result instead.
console.log(add(10));
console.log(add(10));

//Example 2:

function fibonacci(num, cache = {}) {
  if (cache[num]) return cache[num];
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;
  return (cache[num] = fibonacci(num - 1) + fibonacci(num - 2));
}

console.log(fibonacci(6));

//Example 3:

function factorial(num, cache = {}) {
  if (cache[num]) return cache[num];
  if (num === 1 || num === 0) return 1;
  return (cache[num] = num * factorial(num - 1));
}

console.log(factorial(6));

//Example 4:

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2, num3) {
  return num1 * num2 * num3;
}

function getUniqueId(fn, args) {
  let uniqueKey = [];
  uniqueKey = uniqueKey.concat(fn.name, args);
  return uniqueKey.join("|");
}

function memoise(fn) {
  let cache = {};

  return function (...args) {
    const uniqueId = getUniqueId(fn, args);
    if (cache[uniqueId]) {
      return cache[uniqueId];
    } else {
      cache[uniqueId] = fn(...args);
      return cache[uniqueId];
    }
  };
}

const result = memoise(multiply);
console.log("Result:", result(10, 20, 30));
