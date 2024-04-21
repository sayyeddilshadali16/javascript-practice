const sortMergeArray = (arr1, arr2) => {
  const mergedArray = arr1.concat(arr2);
  mergedArray.sort((a, b) => a - b);
  return mergedArray;
};

console.log(sortMergeArray([1,3,4,7],[4,5,8,9]))