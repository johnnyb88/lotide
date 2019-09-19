const eqObjects = function(obj1, obj2) {
  let arr1 = Object.keys(obj1);
  let arr2 = Object.keys(obj2);
  
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2) === true) {
    console.log(`🌈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛑ Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(`Example label: ${inspect(actual)}`);