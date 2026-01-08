
// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  var unique = [];

  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

// Example
var input = [1, 2, 2, 3, 4, 4];
var output = removeDuplicates(input);
console.log(output); // [1, 2, 3, 4]
