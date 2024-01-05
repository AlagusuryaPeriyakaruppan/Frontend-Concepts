/***
 * Closure gives an access to outer function scope from an inner function.
 */

var name = "Surya",
  num1 = 3,
  num2 = 5;

function printValue() {
  var num1 = 4;
  console.log(`${name} scored ${num1 + num2}`);
}

printValue();

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}

A(1);

//Counter dilemma

let count = 0;
function add() {
  count += 1;
  console.log("COUNT:", count);
}

add();
add();
add();
add();

//optimal solution

const total = (function () {
  let count = 0;
  function add() {
    count += 1;
    console.log("SELF INVOKING COUNT- ", count);
  }
  return add;
})();

total();
total();
total();

function test1() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("Value of Var", i);
    }, 1000);
  }
}

function test2() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("Value of Let", i);
    }, 1000);
  }
}

function test3() {
  for (var i = 0; i < 3; i++) {
    function test4(j) {
      setTimeout(() => {
        console.log("Value of ES6 - ", j);
      }, 1000);
    }
    test4(i);
  }
}

test1();
test2();
//3 3 3 - VAR
//0 1 2 - LET
test3();
