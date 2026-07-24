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
      this.toggle.textContent = "Hide";
    } else {
      this.content.style.display = "none";
      this.toggle.textContent = "Show";
    }
  }
}
// Enable Show/Hide for existing cards
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  new Card(card);
});
class App {
  constructor() {
    this.form = document.getElementById("task-form");
    this.title = document.getElementById("title");
    this.description = document.getElementById("description");
    this.container = document.querySelector(".cards-container");
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.addCard();
    });
  }
  addCard() {
    const title = this.title.value.trim();
    const description = this.description.value.trim();
    if (title === "" || description === "") {
      alert("Please fill in all fields.");
      return;
    }
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <button class="card-header">
        <h2>${title}</h2>
        <span class="toggle">Show</span>
      </button>
      <div class="card-content" style="display: none;">
        <p>${description}</p>
      </div>
    `;
    this.container.appendChild(card);
    new Card(card);
    // Clear the form
    this.title.value = "";
    this.description.value = "";
  }
}
new App();