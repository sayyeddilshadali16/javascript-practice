function sumEvenOddIndices(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }

    return { sumEven, sumOdd };
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sums = sumEvenOddIndices(array);
console.log("Sum of elements at even indices:", sums.sumEven);
console.log("Sum of elements at odd indices:", sums.sumOdd);
