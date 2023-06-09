function sumOfAllOddNumbers(nums) {
  // Insert code here;
  const sumOfOddNums = nums.reduce((accumulator, num) => {
    if (num % 2 != 0) {
      accumulator++;
    }
    return accumulator;
  }, 0);
  return sumOfOddNums;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
