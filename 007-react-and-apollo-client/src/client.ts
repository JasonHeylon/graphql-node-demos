import ApolloClient from "apollo-boost";

const SERVER = "http://localhost:4000";

const client = new ApolloClient({
  uri: SERVER,
});

export default client;
