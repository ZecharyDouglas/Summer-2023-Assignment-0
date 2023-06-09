function isPalindrome(word) {
  // Insert code here;
  start = 0;
  end = word.length - 1;
  for (let start = 0; start < word.length; start++) {
    if (word[start] != word[end]) {
      return false;
    } else end--;
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
