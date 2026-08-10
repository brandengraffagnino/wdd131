const courts = [

    {
        city: "Gilbert",
        name: "Freestone Park",
        courts: 16,
        description:
            "One of the most popular pickleball locations in the East Valley."
    },

    {
        city: "Mesa",
        name: "Gene Autry Park",
        courts: 12,
        description:
            "A dedicated pickleball facility with numerous courts and events."
    },

    {
        city: "Chandler",
        name: "Paseo Vista Recreation Area",
        courts: 8,
        description:
            "A growing destination for recreational and competitive play."
    },

    {
        city: "Phoenix",
        name: "Pecos Park",
        courts: 24,
        description:
            "A large pickleball complex that hosts tournaments and league play."
    }

];

const citySelect = document.querySelector("#citySelect");
const courtInfo = document.querySelector("#courtInfo");

citySelect.addEventListener("change", () => {

    const selectedCity = citySelect.value;

    const court = courts.find(
        court => court.city === selectedCity
    );

    if (court) {

        courtInfo.innerHTML = `
            <h3>${court.name}</h3>

            <p>
                <strong>City:</strong>
                ${court.city}
            </p>

            <p>
                <strong>Number of Courts:</strong>
                ${court.courts}
            </p>

            <p>
                ${court.description}
            </p>
        `;

    } else {

        courtInfo.innerHTML = `
            <h3>Court Information</h3>

            <p>
                Select a city to see court information.
            </p>
        `;

    }

});