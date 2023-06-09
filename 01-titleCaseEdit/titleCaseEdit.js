function titleCaseEdit(title) {
  // Insert code here;
  let arr = title.split(" ");

  arr.forEach((element, index) => {
    arr[index] = element.charAt(0).toUpperCase() + element.slice(1);
  });
  arr = arr.join(" ");

  return arr;
}

// Do not edit this line;
module.exports = titleCaseEdit;
