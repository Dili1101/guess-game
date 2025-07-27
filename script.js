alert("JS yuklandi");
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; // urinishlar soni

function checkGuess() {
  let guess = Number(document.getElementById('guessInput').value);
  let message = document.getElementById('message');
  let attemptsText = document.getElementById('attempts');

  if (!guess) {
    message.textContent = "Iltimos, son kiriting!";
    return;
  }

  attempts++;

  if (guess < secretNumber) {
    message.textContent = "Kichik! Yana urinib ko'r!";
  } else if (guess > secretNumber) {
    message.textContent = "Katta! Yana urinib ko'r!";
  } else {
    message.textContent = `Tabriklaymiz! ${attempts} urinishda topding!`;
  }

  attemptsText.textContent = `Urinishlar soni: ${attempts}`;
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').textContent = 'Yangi o‘yin boshlandi!';
  document.getElementById('attempts').textContent = '';
}