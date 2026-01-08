
// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

// Example
var input = [1, 2, 3, 4];
var output = sumArray(input);
console.log(output); // 10
