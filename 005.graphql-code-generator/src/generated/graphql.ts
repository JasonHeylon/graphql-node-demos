export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Book = {
   __typename?: 'Book';
  id: Scalars['ID'];
  title: Scalars['String'];
  author: Scalars['String'];
};

export type BooksInput = {
  keyword: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  books: Array<Maybe<Book>>;
};


export type QueryBooksArgs = {
  search?: Maybe<BooksInput>;
};

export type AddBookInput = {
  title: Scalars['String'];
  author: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  addBook: Book;
};


export type MutationAddBookArgs = {
  book: AddBookInput;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

