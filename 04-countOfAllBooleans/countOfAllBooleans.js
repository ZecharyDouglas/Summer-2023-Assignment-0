function countOfAllBooleans(arr) {
  let booleanCount = arr.reduce((accumulator, obj) => {
    if (typeof obj == "boolean") {
      accumulator++;
    }
    return accumulator;
  }, 0);

  // Insert code here;
  return booleanCount;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
