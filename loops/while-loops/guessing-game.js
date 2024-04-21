const targetNumber = Math.floor(Math.random() * 100) + 1;

let guess = 0;
let attempts = 0;

console.log("Welcome to the Number Guessing Game!");
console.log("Try to guess the number between 1 and 100.");

while (guess !== targetNumber) {
    guess = parseInt(prompt("Enter your guess:"));

    attempts++;

    if (guess === targetNumber) {
        console.log("Congratulations! You've guessed the correct number " + targetNumber + " in " + attempts + " attempts.");
    } else if (guess < targetNumber) {
        console.log("Try again! The number is higher than " + guess + ".");
    } else {
        console.log("Try again! The number is lower than " + guess + ".");
    }
}
