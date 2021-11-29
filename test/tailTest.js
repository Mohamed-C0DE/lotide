const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return array without the first index", () => {
    const actual = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(actual, expected);
  });
});
