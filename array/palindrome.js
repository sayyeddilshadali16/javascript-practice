const checkPalindrome = (arr) => {
  const reversedArr = arr.slice().reverse();
  return arr.every((value, index) => value === reversedArr[index]);
};

const result = [1, 2, 3, 2, 1];
console.log(checkPalindrome(result));

const result2 = [1, 2, 3, 5, 6];
console.log(checkPalindrome(result2));
