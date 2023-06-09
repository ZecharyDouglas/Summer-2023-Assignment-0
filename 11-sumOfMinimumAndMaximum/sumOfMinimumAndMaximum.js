function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const sumofMinMax = min + max;
  return sumofMinMax;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
