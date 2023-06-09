function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let count = arr.reduce((accumulator, obj) => {
    if (typeof obj == "boolean" || typeof obj == "string") {
      accumulator++;
    }
    return accumulator;
  }, 0);

  // Insert code here;
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
