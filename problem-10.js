
//Problem 10: PingPong Challenge
function pingPongOneLine() {
  var result = [];

  for (var i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("PingPong");
    } else if (i % 3 === 0) {
      result.push("Ping");
    } else if (i % 5 === 0) {
      result.push("Pong");
    } else {
      result.push(i);
    }
  }

  console.log(result.join(", "));
}


pingPongOneLine();
