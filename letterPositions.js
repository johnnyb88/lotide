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


const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.toLowerCase().split(" ").join('');

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  console.log(results);
  return results;
};

// TEST CODE
//assertEqualArrays(letterPositions("hello").e, [1]);
assertEqualArrays(letterPositions("hello my dear").l, [2, 3]);
/*
start with empty object
loop through words -> word (???)
if word in results,
  -inc results. words value by one
   results[word] = results[word] +1
else
  -add it to results with value 1
  return results */