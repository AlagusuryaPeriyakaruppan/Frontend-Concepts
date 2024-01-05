// Self Invoking functions

(function () {
  console.log("Welcome to functions in JS");
})();

//Function without name and it is not hoisted.
const output = function () {
  console.log("I am anonymous function");
};

function add(num1, num2) {
  return num1 + num2;
}

function findTotal(fn, num1, num2) {
  const output = fn(num1, num2);
  return output;
}

const total = findTotal(add, 12, 13);
console.log(total);

//Types of functions:
/*
Parametrised functions
Non parameterised functions
*/

function outer() {
  const value = 2;
  function inner() {
    console.log("Variable - ", value);
  }
  return inner;
}

const closuresInJs = outer();
closuresInJs();

/**CLOSURES
 * Inner functions contain the scope of outer function.
 *
 *
 */

//NOTE : When object is passed to a fucntion it is passed by reference so changing its property when even isnide particular scope
// will change its value
