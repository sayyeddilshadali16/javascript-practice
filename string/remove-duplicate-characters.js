const removeDuplicates = (str) => {
  const uniqueChar = {};
  let result = "";

  for (let char of str) {
    if (!uniqueChar[char]) {
      uniqueChar[char] = true;
      result += char;
    }
  }

  return result;
};

console.log(removeDuplicates('hello world'))