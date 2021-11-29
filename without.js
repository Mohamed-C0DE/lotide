const without = (source, itemsToRemove) => {
  const filtered = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      filtered.push(source[i]);
    }
  }
  return filtered;
};

module.exports = without;
