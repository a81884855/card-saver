const { gql } = require("apollo-server-lambda");

module.exports.typeDefs = gql(
  `  
  type Card {
    id: ID
    name: String
    bank: String
    image: String
    gas: Float
    gasAdditional: String
    gasLimit: Float
    restaurant: Float
    restaurantAdditional: String
    restaurantLimit: Float
    grocery: Float
    groceryAdditional: String
    groceryLimit: Float
    online: Float
    onlineAdditional: String,
    onlineLimit: Float,
    streaming: Float,
    streamingAdditional:String
    streamingLimit:Float
    travel:Float
    travelAdditional:String
    travelLimit:Float
    furnitures:Float
    furnituresAdditional:String
    furnituresLimit:Float
    utilities:Float
    utilitiesAdditional:String
    utilitiesLimit:Float
    phone:Float
    phoneAdditional:String
    phoneLimit:Float
    desc:String
    website:String
    annual:Float
  }

  type Category {
    name: String
    detail: String
  }

  type Result {
    message: String
  }

  type Query {
    categories: [Category]
    cards: [Card]
  }

  type Mutation {
    addComment(title: String, content:String ): Result
  }
`
);
