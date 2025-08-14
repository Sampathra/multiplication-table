var live = document.getElementById("live");
var msg = document.getElementById("message");
var submit = document.getElementById("submit");

var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

var lives = 5;

submit.onclick = () => {
  var userInput = parseInt(document.getElementById("num").value);
  let message = "";
  if (!userInput || userInput < 1 || userInput > 100) {
    msg.style.display = "block";
    msg.style.color = "red";
    msg.innerHTML = "Please enter a valid number between 1 and 100.";
    return;
  }
  lives--;
  if (userInput === randomNumber) {
    location.href = "win.html";
  } else if (lives === 0) {
    location.href = "lose.html";
  } else if (userInput > randomNumber) {
    message = "Your guess is too high. Try again!";
  } else if (userInput < randomNumber) {
    message = "Your guess is too low. Try again!";
  }
  msg.style.display = "block";
  msg.innerHTML = message;
  live.innerHTML = lives;
};
