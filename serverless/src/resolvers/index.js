const { Category, Categories, Cards, Card } = require("./query");
const { addComment } = require("./mutation");
module.exports.resolvers = {
  Query: {
    Category: (root, args, context) => Category(args, context),
    Categories: (root, args, context) => Categories(args, context),
    Cards: (root, args, context) => Cards(args, context),
    Card: (root, args, context) => Card(args, context)
  },
  Mutation: {
    addComment: (root, args, context) => addComment(args, context)
  }
};
