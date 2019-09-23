const tail = require("../tail");
const assert = require("chai").assert;


describe("tail", () => {

  it("should return ['Lighthouse, Labs'] when given array: ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
    
  });
});




// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// assertEqual(tail(words).length, 3);