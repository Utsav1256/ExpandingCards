const cards = document.querySelectorAll(".card");
const overlay = document.querySelector(".overlay");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClasses();
    card.classList.add("active");
    card.appendChild(overlay);
  });
});

function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
