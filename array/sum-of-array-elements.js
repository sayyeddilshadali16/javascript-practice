const sumOfArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const number = [1, 2, 3, 4, 5];
const result = sumOfArray(number);
console.log(result);
