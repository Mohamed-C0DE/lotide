// TEST/ASSERTION FUNCTIONS
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const countLetters = function (str) {
  const lowered = str.toLowerCase();
  const results = {};
  for (const letter of lowered) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

// TEST CODE
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Hello"));
console.log(countLetters("Cocding is fucn"));
