function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}

function displayMenu() {
    console.log("Calculator Menu:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");
}

let choice;
do {
    displayMenu();
    choice = parseInt(prompt("Enter your choice (1-5):"));

    switch (choice) {
        case 1:
            var num1 = parseFloat(prompt("Enter the first number:"));
            var num2 = parseFloat(prompt("Enter the second number:"));
            console.log("Result:", add(num1, num2));
            break;
        case 2:
            var num1 = parseFloat(prompt("Enter the first number:"));
            var num2 = parseFloat(prompt("Enter the second number:"));
            console.log("Result:", subtract(num1, num2));
            break;
        case 3:
            var num1 = parseFloat(prompt("Enter the first number:"));
            var num2 = parseFloat(prompt("Enter the second number:"));
            console.log("Result:", multiply(num1, num2));
            break;
        case 4:
            var num1 = parseFloat(prompt("Enter the first number:"));
            var num2 = parseFloat(prompt("Enter the second number:"));
            console.log("Result:", divide(num1, num2));
            break;
        case 5:
            console.log("Exiting calculator. Goodbye!");
            break;
        default:
            console.log("Invalid choice. Please enter a number between 1 and 5.");
    }
} while (choice !== 5);
