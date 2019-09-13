import { gql } from 'apollo-boost';

const getCardsQuery = gql`
  {
    Cards {
      id
      name
      gasReward
      restaurantReward
      onlineReward
      travelReward
      desc
      website
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getCardsQuery, getBooksQuery, addBookMutation, getBookQuery };
