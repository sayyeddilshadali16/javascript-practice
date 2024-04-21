const calculateFactorial = (number) => {
  let factorial = 1;
  let i = 1;

  do {
    factorial *= 1;
    i++;
  } while (i <= number);
  return factorial;
};

console.log(calculateFactorial(5));
