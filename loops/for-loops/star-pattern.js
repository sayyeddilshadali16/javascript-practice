const printTriangle = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= rows - i; j++) {
      row += "";
    }
    for (let k = 1; k <= i; k++) {
      row += "*";
    }

    console.log(row);
  }
};

printTriangle(5);
