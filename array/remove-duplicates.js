const removeDuplicates = (array) => {
  const uniqueElements = {};
  const result = [];

  for (const element of array) {
    if (!uniqueElements[element]) {
      result.push(element);
      uniqueElements[element] = true;
    }
  }
  return result;
};

const arrayWithduplicates = [1, 2, 3, 4, 5, 1, 2, 3];
const uniqueArray = removeDuplicates(arrayWithduplicates);
console.log("Array with duplicate:", arrayWithduplicates);
console.log("Array after removing duplicates:", uniqueArray);
