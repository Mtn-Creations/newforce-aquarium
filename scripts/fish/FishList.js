import { getFish } from "./database.js"

export const FishList = () => {
    const fishes = getFish();

    let htmlString = '<div class="fishlist">\n'

    for (const fish of fishes) {
        htmlString += '<div class="fishcard">\n'
        htmlString += `\t<img class="fishcard__image" src="${fish.image}" alt="${fish.species}" />\n`
        htmlString += '\t<div>\n'
        htmlString += '\t\t<dl class="fishcard__details_container">\n'
        htmlString += '\t\t\t<dt class="fishcard__label">Species</dt>\n'
        htmlString += `\t\t\t\t<dd class="fishcard__species">${fish.species}</dd>\n`
        htmlString += '\t\t\t<dt class="fishcard__label">Length</dt>\n'
        htmlString += `\t\t\t\t<dd class="fishcard__length">${fish.size}</dd>\n`
        htmlString += '\t\t\t<dt class="fishcard__label">Name</dt>\n'
        htmlString += `\t\t\t\t<dd class="fishcard__nickname">${fish.name}</dd>\n`
        htmlString += '\t\t\t<dt class="fishcard__label">Location</dt>\n'
        htmlString += `\t\t\t\t<dd class="fishcard__location">${fish.location}</dd>\n`
        htmlString += '\t\t\t<dt class="fishcard__label">Diet</dt>\n'

        for (const food of fish.diet) {
            htmlString += `\t\t\t\t<dd class="fishcard__diet">${food}</dd>\n`
        }

        htmlString += '\t\t</dl>\n\t</div>\n</div>\n'

    }

    return htmlString

}