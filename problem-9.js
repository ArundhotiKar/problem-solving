
//Problem 9: Find the Factorial of a Number
function factorial(n) {
  if (n < 0) {
    return "Invalid input"; // factorial only for non-negative numbers
  }

  var result = 1;

  for (var i = 1; i <= n; i++) {
    result = result * i; // multiply current number
  }

  return result;
}

// Example
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
