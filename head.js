const assertEqual = require("./assertEqual");

const head = (arr) => {
  return arr[0];
};

// test

const arr = [0, 1];
const first = arr[0];

assertEqual(first, 0);
