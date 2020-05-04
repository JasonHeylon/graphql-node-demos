const { graphql } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");
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

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const query = `{
  books {
    title
    author
  }
}`;

graphql(schema, query).then((resp) => {
  console.log("response: ");

  console.dir(resp, { depth: null, colors: true });
});
