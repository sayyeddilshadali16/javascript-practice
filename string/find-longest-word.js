function findLongestWord(sentence) {
    const words = sentence.split(" ");

    let longestWord = "";
    let maxLength = 0;

    for (let word of words) {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '');

        if (cleanWord.length > maxLength) {
            longestWord = cleanWord;
            maxLength = cleanWord.length;
        }
    }

    return longestWord;
}

const sentence = "This is a sample sentence to demonstrate finding the longest word.";
const longestWord = findLongestWord(sentence);
console.log("Longest word in the sentence:", longestWord);
