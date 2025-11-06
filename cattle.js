const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    const types = database.cattleTypes

    // changed the for loop condition from `counter < size` to `counter < types.size` so the counter works with the number of items in the array being iterated
    for (let counter = 0; counter < types.size; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal)
    }

    return cattle
}

module.exports = { roundup }