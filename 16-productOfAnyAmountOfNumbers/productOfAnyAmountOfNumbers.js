function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  const arg = [...args];
  let product = arg.reduce((accumulator, num) => {
    return accumulator * num;
  }, 1);
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
