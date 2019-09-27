import { gql } from 'apollo-boost';

const getCardsQuery = gql`
  {
    Cards {
      id
      name
      image
      gas
      gasAdditional
      restaurant
      restaurantAdditional
      online
      onlineAdditional
      travel
      travelAdditional
      furnitures
      furnituresAdditional
      utilities
      utilitiesAdditional
      phone
      phoneAdditional
      desc
      website
      annual
    }
  }
`;

const getCardQuery = gql`
  query($name: String!) {
    Card(name: $name) {
      id
      name
      image
      gas
      gasAdditional
      restaurant
      restaurantAdditional
      onlineAdditional
      travelAdditional
      furnitures
      furnituresAdditional
      utilities
      utilitiesAdditional
      phone
      phoneAdditional
      online
      travel
      desc
      website
      annual
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
