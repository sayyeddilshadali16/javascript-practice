const countEvenOdd = (array) => {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i<array.length; i++) {
    if (array[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  return { evenCount, oddCount };
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const counts = countEvenOdd(numbers);
console.log(counts.evenCount);
console.log(counts.oddCount);
