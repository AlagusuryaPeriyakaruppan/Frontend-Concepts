/**
 * Currying is a process in functional programming in which we can transform a function
 * with multiple arguments in sequence of nesting function.
 * It returns a new function that expects
 * the next argument inline.
 *
 *
 */

function sum(x) {
  return function (y) {
    return x + y;
  };
}

const output = sum(2);
console.log(output(5));

//CURRYING
console.log(sum(2)(8));

const f = (x) => x + x;
const g = (y) => y * y;

console.log("FG(Y): ", f(g(4)));

//Both should be performed using same function

function add(x) {
  if (arguments.length > 1) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    return sum;
  } else {
    return function (y) {
      return x + y;
    };
  }
}

function addRecursively(x) {
  return function (y) {
    if (y) {
      return addRecursively(x + y);
    } else {
      return x;
    }
  };
}

function recursion(x) {
  return function (y) {
    if (y) {
      return addRecursively(x + y);
    } else {
      return x;
    }
  };
}

console.log(add(10)(20));
console.log(add(40, 20));
console.log(addRecursively(10)(20)(30)(40)());
