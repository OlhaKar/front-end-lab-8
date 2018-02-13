if (confirm("Do you want to play a game?")) {
  let randomNum = Math.floor(Math.random() * 6);
  let guesses = 3;
  let hits = 0;
  let numberRange = 5;
  let attempt = 3;
  let totalPrize = 0;
  let prize = 10;


  for (let i = 0; i < guesses;) {
    hits = prompt(
      "\nEnter a number from 0 to " + numberRange +
      "\nAttempts left: " + attempt +
      "\nTotal prize: " + totalPrize +
      "\nPossible prize on current attempt: " + prize + "$");
    if () {
    	
    }
  }
} else {
  alert("You did not become a millionaire")
}