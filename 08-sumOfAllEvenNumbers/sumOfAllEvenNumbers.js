function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  const sumOfEvenNums = nums.reduce((accumulator, num) => {
    if (num % 2 == 0) {
      accumulator++;
    }
    return accumulator;
  }, 0);
  return sumOfEvenNums;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
