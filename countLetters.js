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

module.exports = countLetters;
