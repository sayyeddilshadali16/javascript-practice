const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    chunks.push(chunk);
  }
  return chunks;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
