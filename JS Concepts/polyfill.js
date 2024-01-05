//Array Polyfills

//ForEach Method
const arr = [3, 4, 5, 6, 7];
const arrr = [1, 2, 3, [4, 5], [6, 7, [8, 9, [10, 11]]]];

//return value is undefined
Array.prototype.myForEach = function (cb) {
  //this refers to the array from which this method is called
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function (cb) {
  //returns an array
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }

  return result;
};

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    // Filtering out right candidates from array
    if (cb(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

Array.prototype.myReduce = function (cb, initialValue) {
  // If accumulator is not defined then first element of an array is considered as acc
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

//when depth is not given
Array.prototype.myFlat = function () {
  const output = [];

  function flattenArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenArray(arr[i]);
      } else {
        output.push(arr[i]);
      }
    }
    return output;
  }

  const finalValue = flattenArray(this);
  return finalValue;
};

Array.prototype.myFlatIter = function () {
  const arr = [...this];
  let res = [];
  while (arr.length) {
    const current = arr.shift();
    if (Array.isArray(current)) {
      arr.push(...current);
    } else {
      res.push(current);
    }
  }
  return res;
};

// When depth is given
Array.prototype.myFlatDepth = function (depth) {
  let res = []; //[1,2,[3,[4,5]]]
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth > 0) {
      res.push(...this[i].myFlatDepth(depth - 1));
    } else {
      res.push(this[i]);
    }
  }
  return res;
};

//FOREACH
arr.myForEach((el) => console.log(el));
//MAP
const output = arr.myMap((el) => el * 2);
console.log(output);
//FILTER
const output2 = arr.myFilter((el) => el > 2);
console.log(output2);
//REDUCE
const output3 = arr.myReduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
console.log(output3);
//FLAT
const output4 = arrr.myFlatIter();
console.log("ITERATIVE APPROACH: ", output4);

const output41 = arrr.myFlatDepth(3);
console.log("Actual: ", output41);
