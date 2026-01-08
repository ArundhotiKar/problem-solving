
//Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(str) {

  var words = str.split(" "); // split string into words 
  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    // capitalize first letter + rest of the word
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" "); 
}

// Example
var input = "hello world";
var output = capitalizeWords(input);
console.log(output); // Hello World
