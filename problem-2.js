
// Problem 2: Count Vowels in a String

function countVowels(str) {
  var vowels = "aeiouAEIOU";
  var count = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  
  return count;
}

//Example

var input = "hello";
var output = countVowels(input);
console.log(output); // 2