const vowelConsonants = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = "bcdfghjklmnpqrstvwxyz";

  let countV = 0;
  let countC = 0;

  str = str.toLowerCase();

  for (let char of str) {
    if (vowels.includes(char)) {
      countV++;
    } else if (consonants.includes(char)) {
      countC++;
    }
  }

  return { vowels: countV, consonants: countC };
};

console.log(vowelConsonants('sayyed'))