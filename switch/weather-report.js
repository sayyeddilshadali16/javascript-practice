const weatherReport = (weather) => {
  let report;

  switch (weather.toLowerCase()) {
    case "sunny":
      report = "Its a sunny day";
      break;
    case "rainy":
      report = "Its raining";
      break;
    case "cloudy":
      report = "Its cloudy, it may rain";
      break;
    default:
      report = "Sorry, we dont have a weather report for that";
  }
  return report;
};

console.log(weatherReport("sunny"));
