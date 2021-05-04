const Toy = require('../../models/user')

const toys = []

module.exports = {
    toys: () => {
        return toys
    },

    createdToy: (args) => {
        const toy = {
            title: args.toyInput.title,
            description: args.toyInput.description,
            price: args.toyInput.price,
            date: args.toyInput.date
        }
        toys.push(toy)
        return toy
    }
}