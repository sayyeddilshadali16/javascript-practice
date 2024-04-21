function encryptString(str, shift) {
  let encryptedStr = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      encryptedStr += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      encryptedStr += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      encryptedStr += str[i];
    }
  }

  return encryptedStr;
}

const inputString = "Hello, World!";
const shiftAmount = 3;
const encryptedString = encryptString(inputString, shiftAmount);
console.log("Original string:", inputString);
console.log("Encrypted string:", encryptedString);
