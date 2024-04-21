const findCommonElements = (arr1, arr2) => {
  const commonElement = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonElement.push(arr1[i]);
    }
  }
  return commonElement;
};

console.log(findCommonElements([1, 2, 3, 4], [2, 4, 6, 7]));
