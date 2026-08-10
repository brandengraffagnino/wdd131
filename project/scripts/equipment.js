const paddles = [

    {
        name: "Generation 1 Paddle",
        generation: "Gen 1",
        shape: "Standard, Elongated, or Widebody",
        image: "images/gen1-paddle.webp",
        description:
            "Generation 1 paddles are built by gluing layers together. They may use composite or carbon fiber faces and typically feature a honeycomb core with an edge guard attached around the perimeter."
    },

    {
        name: "Generation 2 Paddle",
        generation: "Gen 2",
        shape: "Standard, Elongated, or Widebody",
        image: "images/gen2-paddle.webp",
        description:
            "Generation 2 paddles introduced thermoforming. Heat and pressure are used to fuse the paddle structure together, increasing rigidity, stability, and power. Most feature carbon fiber faces."
    },

    {
        name: "Generation 3 Paddle",
        generation: "Gen 3",
        shape: "Standard, Elongated, or Widebody",
        image: "images/gen3-paddle.webp",
        description:
            "Generation 3 paddles are thermoformed and foam enhanced. Additional foam creates a springboard effect that generates greater power while maintaining stability and spin."
    },

    {
        name: "Generation 4 Paddle",
        generation: "Gen 4",
        shape: "Standard, Elongated, or Widebody",
        image: "images/gen4-paddle.webp",
        description:
            "Generation 4 paddles use full foam core construction rather than a traditional honeycomb core. This design provides improved consistency, responsiveness, and advanced performance characteristics."
    }

];

const gallery = document.querySelector(".equipment-gallery");

function displayPaddles(paddleList) {

    gallery.innerHTML = "";

    paddleList.forEach(paddle => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${paddle.name}</h3>

            <img src="${paddle.image}" alt="${paddle.name}" loading="lazy">

            <p>
                <strong>Generation:</strong>
                ${paddle.generation}
            </p>

            <p>
                <strong>Available Shapes:</strong>
                ${paddle.shape}
            </p>

            <p>
                ${paddle.description}
            </p>
        `;

        gallery.appendChild(card);

    });

}

displayPaddles(paddles);

document.querySelector("#all").addEventListener("click", () => {
    displayPaddles(paddles);
});

document.querySelector("#gen1").addEventListener("click", () => {

    const filteredPaddles = paddles.filter(
        paddle => paddle.generation === "Gen 1"
    );

    displayPaddles(filteredPaddles);

});

document.querySelector("#gen2").addEventListener("click", () => {

    const filteredPaddles = paddles.filter(
        paddle => paddle.generation === "Gen 2"
    );

    displayPaddles(filteredPaddles);

});

document.querySelector("#gen3").addEventListener("click", () => {

    const filteredPaddles = paddles.filter(
        paddle => paddle.generation === "Gen 3"
    );

    displayPaddles(filteredPaddles);

});

document.querySelector("#gen4").addEventListener("click", () => {

    const filteredPaddles = paddles.filter(
        paddle => paddle.generation === "Gen 4"
    );

    displayPaddles(filteredPaddles);

});