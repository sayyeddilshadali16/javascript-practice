const sumOfDigits = (number) => {
  let sum = 0;
  number = Math.abs(number);

  while (number > 0) {
    let digit = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
  }
  return sum;
};

console.log(sumOfDigits(12345));
