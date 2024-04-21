function searchSubstring(str, substring) {
  if (str.includes(substring)) {
    return "Substring '" + substring + "' found";
  } else {
    return "Substring '" + substring + "' not found";
  }
}

const inputString = "Hello, world!";
const substringToSearch = "world";
console.log(searchSubstring(inputString, substringToSearch));
