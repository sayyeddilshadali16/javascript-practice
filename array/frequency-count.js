function countFrequency(arr) {
    const frequency = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequency[element] = (frequency[element] || 0) + 1;
    }

    return frequency;
}

const array = [1, 2, 3, 1, 2, 1, 3, 4, 5, 4, 4];
const frequency = countFrequency(array);
console.log("Frequency of each element:", frequency);
