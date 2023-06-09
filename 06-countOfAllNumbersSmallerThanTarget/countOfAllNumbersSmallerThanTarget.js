function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  const result = nums.reduce((accumulator, num) => {
    if (num < target) {
      accumulator++;
    }

    return accumulator;
  }, 0);
  return result;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
