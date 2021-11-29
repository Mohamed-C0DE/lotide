const assertArraysEqual = require("../assertArraysEqual");

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

const arr3 = [1, 2, 3, 4];
const arr4 = [2, 3, 4];

assertArraysEqual(arr1, arr2);
assertArraysEqual(arr3, arr4);
