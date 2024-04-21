const replaceChar = (str, ctr, clr) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ctr) {
      result += clr;
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(replaceChar("hello", "o", "@"));
