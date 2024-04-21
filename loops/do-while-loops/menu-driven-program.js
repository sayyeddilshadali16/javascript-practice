const displayMenu = () => {
  console.log("Menu:");
  console.log("1. Addition");
  console.log("2. Substraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Exit");
};

const addition = () => {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  console.log("Result:", num1 + num2);
};
const substraction = () => {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  console.log("Result:", num1 - num2);
};
const multiplication = () => {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  console.log("Result:", num1 * num2);
};
const division = () => {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));

  if (num2 !== 0) {
    console.log("Result:", num1 / num2);
  } else {
    console.log("Error: Division by zero.");
  }
};

let choice = 0;
do {
  displayMenu();
  choice = parseInt(prompt("Enter your choice (1-5)"));
  switch (choice) {
    case 1:
      addition();
      break;
    case 2:
      substraction();
      break;
    case 3:
      multiplication();
      break;
    case 4:
      division();
      break;
    case 5:
      console.log("Exiting program.");
      break;
    default:
      console.log("Invalid choice.");
  }
} while (choice !== 5);
