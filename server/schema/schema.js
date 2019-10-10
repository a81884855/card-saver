const graphql = require('graphql');
const Card = require('../models/card');
const Category = require('../models/category');
const Comment = require('../models/comment');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const CardType = new GraphQLObjectType({
  name: 'Card',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    gas: { type: GraphQLFloat },
    gasAdditional: { type: GraphQLString },
    restaurant: { type: GraphQLFloat },
    restaurantAdditional: { type: GraphQLString },
    grocery: { type: GraphQLFloat },
    groceryAdditional: { type: GraphQLString },
    online: { type: GraphQLFloat },
    onlineAdditional: { type: GraphQLString },
    streaming: { type: GraphQLFloat },
    streamingAdditional: { type: GraphQLString },
    travel: { type: GraphQLFloat },
    travelAdditional: { type: GraphQLString },
    furnitures: { type: GraphQLFloat },
    furnituresAdditional: { type: GraphQLString },
    utilities: { type: GraphQLFloat },
    utilitiesAdditional: { type: GraphQLString },
    phone: { type: GraphQLFloat },
    phoneAdditional: { type: GraphQLString },
    desc: { type: GraphQLString },
    website: { type: GraphQLString },
    annual: { type: GraphQLFloat }
  })
});

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    detail: { type: GraphQLString },
    merchant: { type: GraphQLList(GraphQLString) }
  })
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Card: {
      type: CardType,
      args: { name: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parent, args) {
        return Card.findOne({ name: args.name });
      }
    },
    Cards: {
      type: new GraphQLList(CardType),
      resolve() {
        return Card.find({});
      }
    },
    Category: {
      type: CategoryType,
      args: { name: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parent, args) {
        return Category.findOne({ name: args.name });
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCard: {
      type: CardType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        gasReward: { type: GraphQLFloat },
        gasRewardAdditional: { type: GraphQLString },
        restaurantReward: { type: GraphQLFloat },
        onlineReward: { type: GraphQLFloat },
        travelReward: { type: GraphQLFloat },
        desc: { type: new GraphQLNonNull(GraphQLString) },
        website: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const card = new Card({
          name: args.name,
          image: args.image,
          gasReward: args.gasReward,
          gasRewardAdditional: args.gasRewardAdditional,
          restaurantReward: args.restaurantReward,
          onlineReward: args.onlineReward,
          travelReward: args.travelReward,
          desc: args.desc,
          website: args.website
        });
        return card.save();
      }
    },
    addCategory: {
      type: CategoryType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        detail: { type: new GraphQLNonNull(GraphQLString) },
        merchant: { type: new GraphQLList(GraphQLString) }
      },
      resolve(parent, args) {
        const category = new Category({
          name: args.name,
          detail: args.detail,
          merchant: args.merchant
        });
        return category.save();
      }
    },
    addComment: {
      type: CommentType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const comment = new Comment({
          title: args.title,
          content: args.content
        });
        return comment.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
