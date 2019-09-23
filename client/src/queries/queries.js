import { gql } from 'apollo-boost';

const getCardsQuery = gql`
  {
    Cards {
      id
      name
      image
      gasReward
      gasReward_additional
      restaurantReward
      onlineReward
      travelReward
      desc
      website
    }
  }
`;

const getCardQuery = gql`
  query($name: String!) {
    Card(name: $name) {
      id
      name
      image
      gasReward
      gasReward_additional
      restaurantReward
      onlineReward
      travelReward
      desc
      website
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

export { getCardsQuery, getCardQuery, addBookMutation, getBookQuery };
