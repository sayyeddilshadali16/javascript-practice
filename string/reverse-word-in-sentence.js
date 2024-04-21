const reverseWords = (str) => {
  const words = str.split("");
  const reversedWords = words.reverse();
  const reversedSentence = reversedWords.join("");
  return reversedSentence;
};

console.log(
  reverseWords("This a is sample to check the reverse word  function")
);
