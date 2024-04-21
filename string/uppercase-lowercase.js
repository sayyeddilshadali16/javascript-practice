const convertCase = (str) => {
  let low = str.toLowerCase();
  let up = str.toUpperCase();

  return { lowercase: low, uppercase: up };
};

console.log(convertCase("sayyed"));
