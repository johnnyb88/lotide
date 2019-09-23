const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("should return 5 when given array: [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it('should return "hello" when given array: ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

});


// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");