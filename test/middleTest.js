const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("should return middle value in odd array", () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert.deepEqual(actual, expected);
  });
  it("should return two values in even array", () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });
  it("should return empty array if array has 1 or 2 values", () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
});
