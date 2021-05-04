const { buildSchema } = require('graphql')

module.exports = buildSchema(`
type Toy {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
}

input ToyInput {
    title: String!
    description: String!
    price: Float!
    date: String!
}

type RootQuery {
    toys: [Toy!]!
}

type RootMutation {
    createdToy(toyInput: ToyInput): Toy
}

schema {
    query: RootQuery
    mutation: RootMutation
}

`)