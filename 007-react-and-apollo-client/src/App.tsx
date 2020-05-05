import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { Book } from "./generated/graphql";
import { GET_BOOKS } from "./api";

type Response = { books: Book[] };

const App: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery<Response>(GET_BOOKS);

  if (loading) return <div>loading...</div>;
  if (error) return <div>failed</div>;

  return (
    <ul>
      {data?.books.map((book) => (
        <li>
          {book.title} - {book.author}
        </li>
      ))}
    </ul>
  );
};

export default App;
