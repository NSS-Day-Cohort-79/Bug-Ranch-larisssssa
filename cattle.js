const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    const types = database.cattleTypes

    // changed the for loop condition from `counter < size` to `counter < herdSize` argument 
    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        // changed from the object animal to string animal breed to be added to cattle array
        cattle.push(animal.breed)
    }

    return cattle
}

module.exports = { roundup }