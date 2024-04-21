const isPalindrome = (number) => {
  let originalNumber = number;
  let reversedNumber = 0;

  while (number !== 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
  }
  return originalNumber === reversedNumber;
};

if (isPalindrome(12321)) {
  console.log("its a palindrome");
} else {
  console.log("its not a palindrome");
}
