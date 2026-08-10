const quizButtons = document.querySelectorAll(".quiz-btn");
const result = document.querySelector("#quiz-result");

quizButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.dataset.answer === "11") {

            result.textContent =
                "✅ Correct! Standard pickleball games are usually played to 11 points and must be won by 2.";

            result.style.color = "green";

        } else {

            result.textContent =
                "❌ Not quite. Standard pickleball games are usually played to 11 points and must be won by 2.";

            result.style.color = "red";

        }

    });

});