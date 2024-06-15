// Reverse a string

// function reverseString(str) {
//   return str.split().reverse().join();
// }

// console.log(reverseString("hello"));

function reverseString(str) {
  let reversed = "";
  for (let index = str.length - 1; index >= 0; index--) {
    reversed += str[index];
  }
  return reversed;
}

// console.log(reverseString("hello"));

// Check palindrome

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

// console.log(isPalindrome("racecar"));

// Largest number in array

// function findLargest(arr) {
//   return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
// }

function findLargest(array) {
  let largest = array[0];
  for (let index = 1; index < array.length; index++) {
    if (array[index] > largest) {
      largest = array[index];
    }
  }
  return largest;
}

// console.log(findLargest([1, 4, 7, 9, 0]));

// FizzBuzz

function fizzBuzz() {
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(`${index} is not divisible by either 3 or 5`);
    }
  }
}

// fizzBuzz();

// Factorial of number

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let index = 2; index <= n; index++) {
    result *= index;
  }
  return result;
}

// console.log(factorial(5));

// Remove duplicates in array

function removeDuplicate(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// console.log(removeDuplicate([1, 1, 2, 2, 3, 3]));

// Flatten a nested array

function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flattenArray(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

// console.log(flattenArray([1, [2, [3, [4]], 5]]));

// Check number is Prime

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// console.log(isPrime(7));

// Merge two sorted array

function mergeArray(arr1, arr2) {
  return arr1.sort().concat(arr2.sort());
}

console.log(mergeArray([1, 3, 5], [2, 4, 6]));
