const zeroOutNegative = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
};

console.log(zeroOutNegative([-1, -2, 3, 4, 5, -6]));
