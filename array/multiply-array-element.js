const multiplyArray = (array, factor) => {
  const multipliedArray = array.map((element) => element * factor);
  return multipliedArray;
};

const numbers = [1, 2, 3, 4, 5];
const factors = 2;
const multipliedNumbers = multiplyArray(numbers, factors);
console.log(numbers);
console.log(factors, multipliedNumbers);
