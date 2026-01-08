
// Problem-1 Write a function that takes a string and returns it reversed.

function reverseString(str) {
  var reversed = "";
  
  for (var i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  
  return reversed;
}

//Example
var input = "hello";
var output = reverseString(input);
console.log(output); // olleh
