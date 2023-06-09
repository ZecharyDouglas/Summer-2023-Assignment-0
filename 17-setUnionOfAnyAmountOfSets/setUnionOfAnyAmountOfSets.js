function setUnionOfAnyAmountOfSets(...args) {
  let unionSet = new Set();

  args.forEach((set) => {
    if (set instanceof Set) {
      set.forEach((element) => unionSet.add(element));
    }
  });

  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
