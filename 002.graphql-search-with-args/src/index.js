const { makeExecutableSchema } = require("graphql-tools");
const { graphql } = require("graphql");

const BOOKS = [
  { id: "1", title: "Life", author: "Pablo Scott" },
  { id: "2", title: "World", author: "Murray Lynch" },
  { id: "3", title: "What heel does", author: "Murray Lynch" },
];

const typeDefs = `
type Book {
  id: ID!
  title: String!
  author: String!
}

input BooksInput {
  keyword: String!
}

type Query {
  books(search: BooksInput): [Book]!
}
`;

const resolvers = {
  Query: {
    books(_, { search }) {
      return BOOKS.filter((book) => book.title.includes(search.keyword));
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const query = `{
  books(search: { keyword: "heel" }) {
    title
    author
  }
}`;

graphql(schema, query).then((resp) => {
  console.log("response: ");

  console.dir(resp, { depth: null, colors: true });
});
