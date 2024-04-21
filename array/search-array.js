const findIndex = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
};

const arr = [10, 20, 30, 40, 50];
const elementToFind = 30;
const index = findIndex(arr, elementToFind);
console.log("Index of", elementToFind, "is", index);
