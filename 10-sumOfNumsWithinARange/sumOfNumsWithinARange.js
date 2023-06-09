function sumOfNumsWithinARange(nums, start, end) {
  let sum = 0;
  if (start >= nums.length || end > nums.length - 1) {
    return 0;
  }

  for (let index = start; index <= end; index++) {
    sum++;
  }
  return 1;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
