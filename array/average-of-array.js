const averageOfArray = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  const average = sum / 5;
  return average;
};

const number = [1, 2, 3, 4, 5];
const result = averageOfArray(number);
console.log(result);
