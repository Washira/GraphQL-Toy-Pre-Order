const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");

const app = express();

app.use(bodyParser.json());

app.use(
  "/toyql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

// mongoose
//   .connect(
//     `mongodb+srv://${process.env.MONGO_USER}:
//   ${process.env.MONGO_PASSWORD}@mernstack.3ce3y.mongodb.net/
//   ${process.env.MONGO_DB}?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     app.listen(4000);
//   })
//   .catch((err) => {
//     throw err;
//   });


app.listen(4000);