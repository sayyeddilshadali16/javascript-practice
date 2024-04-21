const simulateTrafficLight = () => {
  const lightState = Math.floor(Math.random() * 3);

  switch (lightState) {
    case 0:
      console.log("Traffic light is RED");
      break;
    case 1:
      console.log("Traffic light is YELLOW");
      break;
    case 2:
      console.log("Traffic light is GREEN");
      break;
    default:
      console.log("Invalid traffic light state");
  }
};

simulateTrafficLight()