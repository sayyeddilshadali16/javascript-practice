const compareString = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;

  const minLength = Math.min(len1, len2);

  for (let i = 0; i < minLength; i++) {
    const charCode1 = str1.charCodeAt(i);
    const charCode2 = str2.charCodeAt(i);

    if (charCode1 !== charCode2) {
      return charCode1 - charCode2;
    }
  }

  return len1 - len2;
};

console.log(compareString("apple", "banana"));
