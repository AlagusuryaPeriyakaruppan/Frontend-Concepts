/**
 * DEFINITION: Hoisting refers to the process where by the interpretor appears to move the declaration of the functions,variables and classes to the top of their scope,
 * prior to the execution of the code
 *
 */

function test() {
  var x = 20;
  var x; //It will not become undefined
  var x = 30; //It will take most recent value
  //All of these points to same memory "X"
  console.log(x);
}

test();

function test2() {
  var x = 1;
  {
    var x = 2;
    console.log(x); //2
  }
  console.log(x); //2
}

test2();

function test3() {
  let x = 1;
  {
    let x = 2;
    console.log(x); //2
  }
  console.log(x); //1
}

test3();

var rate = 3;
function testRate() {
  if (rate === undefined) {
    var rate = 2;
    return rate;
  } else {
    return rate;
  }
}

console.log("Rate is ", testRate());

func();
const func = () => console.log("Letvar:", letvar);
let letvar = 3;
