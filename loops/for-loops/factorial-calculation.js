const factorial = (n) => {
  let result = 1;

  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));
