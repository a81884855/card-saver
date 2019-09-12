const graphql = require('graphql');
const Card = require('../models/card');

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
    gasReward: { type: GraphQLFloat },
    restaurantReward: { type: GraphQLFloat },
    onlineReward: { type: GraphQLFloat },
    travelReward: { type: GraphQLFloat },
    desc: { type: GraphQLString },
    website: { type: GraphQLString }
  })
});

// const AuthorType = new GraphQLObjectType({
//   name: 'Author',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     age: { type: GraphQLInt },
//     books: {
//       type: new GraphQLList(BookType),
//       resolve(parent, args) {
//         return Book.find({ authorId: parent.id });
//       }
//     }
//   })
// });

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Card: {
      type: CardType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Card.findById(args.id);
      }
    },
    Cards: {
      type: new GraphQLList(CardType),
      resolve(parent, args) {
        return Card.find({});
      }
    },
    Gas: {
      type: new GraphQLList(CardType),
      resolve(parent, args) {
        return Card.find({}).sort({ gasReward: 'desc' });
      }
    }
    //   author: {
    //     type: AuthorType,
    //     args: { id: { type: GraphQLID } },
    //     resolve(parent, args) {
    //       return Author.findById(args.id);
    //     }
    //   },
    //   books: {
    //     type: new GraphQLList(BookType),
    //     resolve(parent, args) {
    //       return Book.find({});
    //     }
    //   },
    //   authors: {
    //     type: new GraphQLList(AuthorType),
    //     resolve(parent, args) {
    //       return Author.find({});
    //     }
    //   }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCard: {
      type: CardType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        gasReward: { type: GraphQLFloat },
        restaurantReward: { type: GraphQLFloat },
        onlineReward: { type: GraphQLFloat },
        travelReward: { type: GraphQLFloat },
        desc: { type: new GraphQLNonNull(GraphQLString) },
        website: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        const card = new Card({
          name: args.name,
          gasReward: args.gasReward,
          restaurantReward: args.restaurantReward,
          onlineReward: args.onlineReward,
          travelReward: args.travelReward,
          desc: args.desc,
          website: args.website
        });
        return card.save();
      }
      //     },
      //     addBook: {
      //       type: BookType,
      //       args: {
      //         name: { type: new GraphQLNonNull(GraphQLString) },
      //         genre: { type: new GraphQLNonNull(GraphQLString) },
      //         authorId: { type: new GraphQLNonNull(GraphQLID) }
      //       },
      //       resolve(parent, args) {
      //         let book = new Book({
      //           name: args.name,
      //           genre: args.genre,
      //           authorId: args.authorId
      //         });
      //         return book.save();
      //       }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
