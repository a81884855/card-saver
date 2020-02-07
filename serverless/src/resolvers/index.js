const { categories, cards } = require("./query");
const { addComment } = require("./mutation");
module.exports.resolvers = {
  Query: {
    categories: (root, args, context) => categories(args, context),
    cards: (root, args, context) => cards(args, context)
  },
  Mutation: {
    addComment: (root, args, context) => addComment(args, context)
  }
};
