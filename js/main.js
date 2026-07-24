class Card {
  constructor(cardElement) {
    this.card = cardElement;
    this.header = this.card.querySelector(".card-header");
    this.toggle = this.card.querySelector(".toggle");
    this.content = this.card.querySelector(".card-content");

    this.header.addEventListener("click", () => {
      this.toggleContent();
    });
  }
  toggleContent() {
    this.card.classList.toggle("active");

    if (this.card.classList.contains("active")) {
      this.content.style.display = "block";
      this.toggle.textContent = "Hide ▲";
    } else {
      this.content.style.display = "none";
      this.toggle.textContent = "Show ▼";
    }
  }
}
// Select all cards
const cards = document.querySelectorAll(".card");
// Create a Card object for each card
cards.forEach((card) => {
  new Card(card);
});