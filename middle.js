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

const middle = function(arr) {
  let midArr = [];
  if (arr.length <= 2) {
    midArr.push();
  } else if (arr.length % 2 === 0) {
    midArr.push(arr[Math.floor((arr.length - 1) / 2)]);
    midArr.push(arr[Math.floor((arr.length) / 2)]);
  } else {
    midArr.push(arr[Math.floor(arr.length / 2)]);
  }
  console.log(midArr);
  return midArr;
};

assertEqualArrays(middle([1, 2, 3, 4, 5]), [3]);
assertEqualArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertEqualArrays(middle([1, 2]), []);
assertEqualArrays(middle([1]), []);