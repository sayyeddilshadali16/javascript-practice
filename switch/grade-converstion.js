const convertToLetterGrade = (number) => {
  let letterGrade;

  switch (true) {
    case grade >= 90 && grade <= 100:
      letterGrade = "A";
      break;
    case grade >= 80 && grade < 90:
      letterGrade = "B";
      break;
    case grade >= 70 && grade < 80:
      letterGrade = "C";
      break;
    case grade >= 60 && grade < 70:
      letterGrade = "D";
      break;
    case grade >= 0 && grade < 60:
      letterGrade = "F";
      break;
    default:
      letterGrade = "Invalid Grade";
  }
  return letterGrade;
};

console.log(convertToLetterGrade(55));
