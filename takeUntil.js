const takeUntil = function (array, callback) {
  const results = [];

  for (const el of array) {
    if (callback(el)) {
      return results;
    }
    results.push(el);
  }
};

module.exports = takeUntil;
