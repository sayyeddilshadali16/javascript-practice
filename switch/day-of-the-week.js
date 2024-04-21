const currentDay = new Date().getDay();

const getDayName = (dayIndex) => {
  switch (dayIndex) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thrusday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid Day";
  }
};

switch (currentDay) {
  case 0:
  case 6:
    console.log("Its weekend");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Its weekday");
    break;
  default:
    console.log("Invalid Day");
}
