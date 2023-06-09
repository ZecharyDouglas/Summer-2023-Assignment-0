function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  const matchingNums = nums.reduce((accumulator, num, index) => {
    if (num == index) {
      accumulator++;
    }
    return accumulator;
  }, 0);
  return matchingNums;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
