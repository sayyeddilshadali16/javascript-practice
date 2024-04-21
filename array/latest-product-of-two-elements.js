const largestProduct = (arr) => {
  if (arr.length < 2) {
    throw new Error("Array must contain atleat 2 element");
  }

  let maxProduct = arr[0] * arr[1];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] * Math.max(...arr.slice(0, i)) > maxProduct) {
      maxProduct = arr[i] * Math.max(...arr.slice(0, i));
    }
    if (arr[i] * Math.min(...arr.slice(0, i)) > maxProduct) {
      maxProduct = arr[i] * Math.min(...arr.slice(0, i));
    }
  }
  return maxProduct;
};

console.log(largestProduct([1, 2, 3, 4, 5, 6, 7, 8, 0]));
