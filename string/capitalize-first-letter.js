function capitalizeFirstLetterOfEachWord(sentence) {
  const words = sentence.split(" ");

  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

const sentence = "hello world! this is a test sentence.";
const capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
console.log("Original sentence:", sentence);
console.log("Capitalized sentence:", capitalizedSentence);
