class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let middle = Math.floor(nums.length / 2);
    let newArray = [];

    if (nums[middle] == target) {
      return true;
    } else {
      // Right half
      if (target > nums[middle]) {
        for (let index = middle + 1; index < nums.length; index++) {
          newArray.push(nums[index]);
        }
        return this.binarySearch(newArray, target);
      }
      // Left half
      if (target < nums[middle]) {
        for (let index = 0; index < middle; index++) {
          newArray.push(nums[index]);
        }
        return this.binarySearch(newArray, target);
      }
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
