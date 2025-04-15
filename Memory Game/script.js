class MemoryGame {
  constructor() {
    this.board = document.getElementById("gameBoard");
    this.movesDisplay = document.getElementById("moves");
    this.timerDisplay = document.getElementById("timer");
    this.pairsDisplay = document.getElementById("pairs");
    this.resetBtn = document.getElementById("resetBtn");

    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.moves = 0;
    this.canFlip = true;
    this.time = 0;
    this.timer = null;

    this.cardValues = ["A", "B", "C", "D", "E", "F", "G", "H"];

    this.init();
  }

  init() {
    this.resetBtn.addEventListener("click", () => this.resetGame());
    this.resetGame();
  }

  resetGame() {
    this.board.innerHTML = "";
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.moves = 0;
    this.time = 0;
    this.canFlip = true;

    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      this.time++;
      this.timerDisplay.textContent = `Time: ${this.time}s`;
    }, 1000);

    this.updateStats();

    const gameCards = [...this.cardValues, ...this.cardValues];
    this.shuffleArray(gameCards);

    gameCards.forEach((value, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.value = value;
      card.dataset.index = index;

      const front = document.createElement("div");
      front.className = "card-face card-front";
      front.textContent = "?";

      const back = document.createElement("div");
      back.className = "card-face card-back";
      back.textContent = value;

      card.appendChild(front);
      card.appendChild(back);

      card.addEventListener("click", () => this.handleCardClick(card));
      this.board.appendChild(card);
      this.cards.push(card);
    });
  }

  handleCardClick(card) {
    if (
      !this.canFlip ||
      this.flippedCards.includes(card) ||
      card.classList.contains("matched")
    ) {
      return;
    }

    card.classList.add("flipped");
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.moves++;
      this.updateStats();
      this.checkForMatch();
    }
  }

  checkForMatch() {
    const [card1, card2] = this.flippedCards;
    const value1 = card1.dataset.value;
    const value2 = card2.dataset.value;

    if (value1 === value2) {
      // Match found
      card1.classList.add("matched");
      card2.classList.add("matched");
      this.flippedCards = [];
      this.matchedPairs++;

      this.updateStats();

      if (this.matchedPairs === this.cardValues.length) {
        clearInterval(this.timer);
        setTimeout(() => {
          alert(`You won in ${this.moves} moves and ${this.time} seconds!`);
        }, 500);
      }
    } else {
      this.canFlip = false;
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        this.flippedCards = [];
        this.canFlip = true;
      }, 1000);
    }
  }

  updateStats() {
    this.movesDisplay.textContent = `Moves: ${this.moves}`;
    this.pairsDisplay.textContent = `Pairs: ${this.matchedPairs}/${this.cardValues.length}`;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new MemoryGame();
});
