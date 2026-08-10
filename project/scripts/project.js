const facts = [
    "Pickleball was invented in 1965 on Bainbridge Island, Washington.",
    "Pickleball combines elements of tennis, badminton, and table tennis.",
    "The court is the same size as a doubles badminton court.",
    "The non-volley zone is commonly called the kitchen.",
    "Pickleball is one of the fastest-growing sports in America."
];

const button = document.querySelector("#factButton");
const factDisplay = document.querySelector("#factDisplay");

button.addEventListener("click", () => {

    const randomIndex =
        Math.floor(Math.random() * facts.length);

    factDisplay.textContent =
        facts[randomIndex];
});