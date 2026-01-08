
//Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  var evenNumbers = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // check if number is even
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

// Example
var input = [1, 2, 3, 4, 5, 6];
var output = findEvenNumbers(input);
console.log(output); // [2, 4, 6]
