const letterPositions = function (sentence) {
  const lowered = sentence.toLowerCase();
  let i = 0;
  const results = {};
  for (const letter of lowered) {
    if (letter === " ") {
      continue;
    }
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
    i++;
  }
  return results;
};

module.exports = letterPositions;
