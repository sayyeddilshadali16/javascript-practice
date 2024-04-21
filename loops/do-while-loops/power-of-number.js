const calculatePower = (base, exponent) => {
  let result = 1;
  let count = 0;

  do {
    result *= base;
    count++;
  } while (count < exponent);
  return result;
};

console.log(calculatePower(2, 2));
