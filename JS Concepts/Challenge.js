//EXAMPLE 1:

function curry() {
  let total = 0;
  return function (x) {
    total += x;
    return total;
  };
}

let sum = curry();

sum(2);
sum(8);
sum(5);

console.log(sum(6));

//EXAMPLE 2:

function add(...args1) {
  let input = [...args1];

  if (args1.length === 0) return 0;

  return function addInner(...args2) {
    input.push(...args2);

    if (args2.length === 0) {
      return input.reduce((acc, current) => acc + current, 0);
    } else {
      return addInner;
    }
  };
}

let total = add(10, 15)(20, 30, 25)(30, 45)(15)();
console.log("TOTAL ADDED VALUE:", total);

//EXAMPLE 3:

function sum1(a, b, c, d) {
  return a + b + c + d;
}

function currying(fn) {
  function helper(...args) {
    if (fn.length <= args.length) {
      return fn(...args);
    } else {
      function subhelper(...args2) {
        return helper(...args, ...args2);
      }
      return subhelper;
    }
  }
  return helper;
}

let curriedSum = currying(sum1);

console.log(curriedSum(1, 2, 3, 4));
console.log(curriedSum(1)(2, 3)(4));
console.log(curriedSum(1)(2)(3)(4));
