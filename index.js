const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = require("./schema");

// database imitation

const users = [{ id: 1, username: "pes", age: 32 }];

// resolver

const createUser = (input) => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};
const root = {
  getAllUsers: () => {
    return users;
  },
  getUser: ({ id }) => {
    return users.find((user) => user, id === id);
  },
  createUser: ({ input }) => {
    const user = createUser(input);
    users.push(user);
    return user;
  },
};

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema,
  })
);

app.listen(5000, () => {
  console.log("server is up on port 5000");
});
