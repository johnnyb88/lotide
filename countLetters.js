const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🌈 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛑ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  let str = string.split(" ").join("");
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    if (!letters[str.charAt(i)]) {
      letters[str.charAt(i)] = 1;
    } else {
      let increment = 1;
      letters[str.charAt(i)] += increment;
    }
  }
 
  return letters;
};
 
countLetters("lighthouse in the house");