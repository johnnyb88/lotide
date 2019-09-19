const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛑ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function that takes an object and value 
// loop through object 
// if key value matches given value 
// return key 
// else return undefined

const findKeyByValue = function(genres, show) {
  for (let key in genres) {
    if (genres[key] === show) {
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);