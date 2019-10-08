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
      grocery
      groceryAdditional
      streaming
      streamingAdditional
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
      grocery
      groceryAdditional
      streaming
      streamingAdditional
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

const getCategoryQuery = gql`
  query($name: String!) {
    Category(name: $name) {
      id
      name
      detail
      merchant
    }
    Cards {
      id
      name
      image
      gas
      gasAdditional
      restaurant
      restaurantAdditional
      streaming
      streamingAdditional
      grocery
      groceryAdditional
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

export { getCardsQuery, getCardQuery, getCategoryQuery, addBookMutation, getBookQuery };
