const printFibonacciSeries = (n) => {
  let firstTerm = 0;
  let secondTerm = 1;

  console.log("Fibonacci Series:");
  console.log(firstTerm);
  console.log(secondTerm);

  let count = 2;

  while (count < n) {
    let nextTerm = firstTerm + secondTerm;
    console.log(nextTerm);
    firstTerm = secondTerm;
    secondTerm = nextTerm;
    count++;
  }
};

printFibonacciSeries(10);
