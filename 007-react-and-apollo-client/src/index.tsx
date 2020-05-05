import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";
import client from "./client";

const ConnectedApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById("app"));
