const calculateSumOfSqaure = (n) => {
  let sum = 0;
  let i = 1;

  do {
    sum += i * i;
    i++;
  } while (i <= n);
  return sum;
};

console.log(calculateSumOfSqaure(5));
