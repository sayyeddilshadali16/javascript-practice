function convertToCamelCase(sentence) {
    const words = sentence.split(" ");

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    const camelCaseSentence = words.join("");

    return camelCaseSentence;
}

const sentence = "convert this sentence to camel case";
const camelCaseResult = convertToCamelCase(sentence);
console.log("Original sentence:", sentence);
console.log("Camel case sentence:", camelCaseResult);
