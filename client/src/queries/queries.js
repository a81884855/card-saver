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

const addCommentMutation = gql`
  mutation addComment($title: String!, $content: String!) {
    addComment(title: $title, content: $content) {
      title
      content
    }
  }
`;

export { getCardsQuery, getCardQuery, getCategoryQuery, addCommentMutation };
