const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

const typeDefs = importSchema("src/schema.graphql");

const BOOKS = [
  { id: "1", title: "Life", author: "Pablo Scott" },
  { id: "2", title: "World", author: "Murray Lynch" },
  { id: "3", title: "What heel does", author: "Murray Lynch" },
];

const resolvers = {
  Query: {
    books(_, { search }) {
      if (search) {
        return BOOKS.filter((book) => book.title.includes(search.keyword));
      }
      return BOOKS;
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

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
