const middle = (arr) => {
  const middleEl = [];
  if (arr.length < 3) {
    return middleEl;
  } else if (arr.length % 2 === 0) {
    let num = arr.length / 2;
    middleEl.push(arr[num - 1], arr[num]);
  } else {
    let num = Math.floor(arr.length / 2);
    middleEl.push(arr[num]);
  }
  return middleEl;
};
