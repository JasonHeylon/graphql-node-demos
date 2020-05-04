const { makeExecutableSchema } = require("graphql-tools");
const { graphql } = require("graphql");

const typeDefs = `
type Book {
  id: ID!
  title: String!
  author: String!
}

type Query {
  books: [Book]!
}
`;

const resolvers = {
  Query: {
    books() {
      return [
        { id: "1", title: "Life", author: "Pablo Scott" },
        { id: "2", title: "World", author: "Murray Lynch" },
      ];
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const query = `{
  books {
    id
    title
    author
  }
}`;

graphql(schema, query).then((resp) => {
  console.log("response: ");

  console.dir(resp, { depth: null, colors: true });
});
