const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqualArrays = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("The arrays match!");
  } else {
    console.log("The arrays do not match!");
  }
};



//return a new array based on callback function

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
assertEqualArrays(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);