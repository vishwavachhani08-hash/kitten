// 🧠 Cat Facts Section
const facts = [
  "Cats sleep for around 70% of their lives! 😴",
  "A cat’s purr can help reduce stress. ❤",
  "Cats can jump six times their height!",
  "Every cat’s nose print is unique, just like a fingerprint!"
];

const factsList = document.getElementById("facts-list");
const addFactButton = document.getElementById("add-fact");

function displayFacts() {
  factsList.innerHTML = "";
  facts.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact;
    factsList.appendChild(li);
  });
}
displayFacts();

addFactButton.addEventListener("click", () => {
  const newFact = prompt("Enter a fun cat fact:");
  if (newFact) {
    facts.push(newFact);
    displayFacts();
  }
});

// 🔝 Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display =
    window.scrollY > 200 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 💌 Contact Form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! 🐾 We'll meow back soon!");
  contactForm.reset();
});