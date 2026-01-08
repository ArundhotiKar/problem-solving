
// Problem 3: Check for Palindrome

function isPalindrome(str) {
  var start = 0;
  var end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
