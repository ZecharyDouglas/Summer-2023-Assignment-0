function frequencyCounter(word) {
  // Insert code here;
  let hashTable = {};
  for (let index = 0; index < word.length; index++) {
    if (!hashTable[word[index]]) {
      hashTable[word[index]] = 1; // Initialize the count to 1
    } else {
      hashTable[word[index]]++; // Increment the count
    }
  }
  return hashTable;
}

// Do not edit this line;
module.exports = frequencyCounter;
