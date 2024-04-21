const addArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    throw new Error("Arrays are not of same length");
  }

  const result = [];
  
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }
  return result;
};

console.log(addArray([1, 2, 3], [4, 5, 6]));
