const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const mongoose = require("mongoose")
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")
const cors = require("cors")

const app = express()

app.use(
  "/graphql",
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  }),
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@mongotest.ez3cp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(() => app.listen(3001, console.log("server is running")))
  .catch(error => {
    throw error
  })