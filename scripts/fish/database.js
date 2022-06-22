const database = {
    fish: [
        {
            species: "Moorish Idol",
            size: 6,
            name: "Edward",
            location: "Maui",
            diet: [
                "Sponges",
                "Coral polyps",
                "Tunicates",
                "Misc. Benthic invertebrates"
            ],
            image: "images/maui/fish/moorish-idol.jpg"
        },
        {
            species: "Saddle Wrasse",
            size: 4,
            name: "Franklin",
            location: "Maui",
            diet: ["Worms", "Shells", "Mollusks", "Shrimp"],
            image: "images/maui/fish/saddleback-wrasse.jpg"
        },
        {
            species: "Yellow Tang",
            size: 4,
            name: "Susan",
            location: "Maui",
            diet: ["Benthic turf algae", "Misc. marine plant materia"],
            image: "images/maui/fish/yellow-tang.jpg"
        },
        {
            species: "Sergent Major",
            size: 4,
            name: "Dave",
            location: "Bermuda",
            diet: ["Larvae of invertebrates", "Zooplankton", "Smaller fish", "Crustaceans", "Various species of algae"],
            image: "images/bermuda/fish/sergent_major_fish.jpg"
        },
        {
            species: "Rock Beauty",
            size: 5,
            name: "Rocky",
            location: "Bermuda",
            diet: ["Benthic invertebrates", "Mucus secreted by other fish"],
            image: "images/bermuda/fish/Rock_Beauty_Angelfish.jpg"
        },
        {
            species: "Squirrelfish",
            size: 3,
            name: "Sam",
            location: "Bermuda",
            diet: ["Benthic invertebrates"],
            image: "images/bermuda/fish/squirrel4.jpg"
        },
        {
            species: "Damselfish",
            size: 3,
            name: "Amanda",
            location: "Aculpulco",
            diet: ["Plankton", "Caridea", "Copepods"],
            image: "images/aculpulco/fish/damselfish.jpg"
        },
        {
            species: "Finescale Triggerfish",
            size: 6,
            name: "Bob",
            location: "Bermuda",
            diet: ["Bottom dwelling crustaceans", "Mollusks", "Sea urchins", "Misc. echinoderms"],
            image: "images/aculpulco/fish/finescale_triggerfish.jpg"
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}