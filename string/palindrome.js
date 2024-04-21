const palindrome = (str) => {
  let rev1 = str.split("").reverse().join("");
  if (rev1 === str) {
    return "Its a palindrome";
  } else {
    return "Its not a palindrome";
  }
};

console.log(palindrome("yes"));
