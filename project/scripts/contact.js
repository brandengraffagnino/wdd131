const form = document.querySelector("#contactForm");
const submissionCount = document.querySelector("#submissionCount");

let count = Number(localStorage.getItem("feedbackCount")) || 0;

submissionCount.textContent = count;

form.addEventListener("submit", () => {

    count++;

    localStorage.setItem("feedbackCount", count);

    submissionCount.textContent = count;

});