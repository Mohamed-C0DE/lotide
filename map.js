// ASSERTIONS
const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// FUNCTION
const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// TEST CODE
const words = ["pig", "horse", "cow", "chicken", "donkey"];
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["p", "h", "c", "c", "d"]);
