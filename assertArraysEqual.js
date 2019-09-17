const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
     if( arr1[i]!== arr2[i]) {
       return false;
     };
  }
  return true
}

const assertEqualArrays = function(arr1, arr2){
  if (eqArrays(arr1, arr2) === true) {
    console.log("The arrays match!");
  } else {
    console.log("The arrays do not match!");
  }  
}

assertEqualArrays([1, 2, 3], [1, 2 ,3]);
assertEqualArrays(['2', '4', '5'], ['2', '3', '5']);
assertEqualArrays(['2', '4', '5', 8], ['2', '3', '5']);
assertEqualArrays(['a', '4', '5'], ['a', '4', '5']);