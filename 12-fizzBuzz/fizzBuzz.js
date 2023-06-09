function fizzBuzz(start, end) {
  // Insert code here;
  let resultArray = [];
  if (end > start) {
    for (let index = start; index <= end; index++) {
      if (index % 3 == 0 && index % 5 == 0) {
        resultArray.push("FizzBuzz");
      } else if (index % 5 == 0) {
        resultArray.push("Buzz");
      } else if (index % 3 == 0) {
        resultArray.push("Fizz");
      } else resultArray.push(index);
    }
  }

  return resultArray;
}

// Do not edit this line;
module.exports = fizzBuzz;
