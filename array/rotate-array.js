const rotateArrayRight = (arr, positions) => {
  if (arr.length === 0) {
    return arr;
  }
  const n = arr.length;
  const actualPosition = positions % n;
  const rotatedPart = arr.slice(-actualPosition);
  const remainingPart = arr.slice(0, n - actualPosition);
  return rotatedPart.concat(remainingPart);
};

console.log(rotateArrayRight([1, 2, 3, 4, 5, 6], 2));
