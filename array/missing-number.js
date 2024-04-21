const missingNumber = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const expectedSum = ((max - min + 1) * (min + max)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
};

console.log(missingNumber([1, 2, 3, 5, 6, 7, 8]));
