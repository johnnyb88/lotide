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

const without = function(source, itemsToRemove) {
  let removedArray = [];
  for (let i = 0; i < source.length; i++)
    if (source[i] !== itemsToRemove[i]) {
      removedArray.push(source[i]);
    }
  return removedArray;
};


const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
assertEqualArrays(words, ["hello", "world", "lighthouse"]);
without([1, 2, 3], [1]); // => [2, 3]
