// const assertEqual = require("./assertEqual");

const tail = function(arr) {
  let end = arr.slice(1);
  return end;
};

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// assertEqual(tail(words).length, 3);

module.exports = tail;