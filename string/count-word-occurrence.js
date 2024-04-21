const countWordOccurrence = (str) => {
  const words = str.split(/\s+/);
  const wordCounts = {};

  for (let word of words) {
    const cleanedWord = word
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .toLowerCase();

    if (wordCounts[cleanedWord]) {
      wordCounts[cleanedWord]++;
    } else {
      wordCounts[cleanedWord] = 1;
    }
  }
  return wordCounts;
};

console.log(countWordOccurrence("sample sentence, simple sentence"));
