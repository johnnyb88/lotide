const middle = require("../middle");
const assert = require("chai").assert;

describe("middle", () => {

  it("should return the middle element of an odd number length array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);

  });

  it("should return the 2 middle elements when given an even number array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("should return an empty array when given 2 or less elements in an array",() => {
    assert.deepEqual(middle([1, 2]), []);
  });
});
