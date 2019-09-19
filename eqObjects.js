const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛑ Assertion Failed: ${actual} !== ${expected}`);
  }
};
//when there is an array value being encountered for a key
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
//function that takes two objects and returns true or false based on
//perfect match.
//objects are equal when:
//they have the same # of keys
//The value of each key in one object is the same as the value for that
//same key in the other object
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


const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true);

 const abc = {a: "1", b: "2", c: "3"};
 assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

 const cd2 = { c: "1", d: ["2", 3] };
 assertEqual(eqObjects(cd, cd2), true); // => true