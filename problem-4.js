
// Problem 4: Find the Maximum Number from an Array

function findMax(arr) {
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Example
var input = [5, 1, 9, 3];
var output = findMax(input);
console.log(output); // 9
