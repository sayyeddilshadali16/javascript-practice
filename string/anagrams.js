const anagrams = (str1, str2) => {
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
};

console.log(anagrams("listen", "silent"));
