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

input AddBookInput {
  title: String!
  author: String!
}

type Mutation {
  addBook(book: AddBookInput!): Book!
}
`;

const resolvers = {
  Query: {
    books(_, { search }) {
      return BOOKS.filter((book) => book.title.includes(search.keyword));
    },
  },
  Mutation: {
    addBook(_, { book }) {
      return {
        id: BOOKS.length,
        ...book,
      };
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const mutation = `mutation {
  addBook(book: { title: "testing", author: "Jason" }) {
    id
    title
    author
  }
}`;

graphql(schema, mutation).then((resp) => {
  console.log("mutation response: ");

  console.dir(resp, { depth: null, colors: true });
});
