const db = require("../db");

module.exports = {
  Card: async (args, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const result = await db.card(args.name);
    return result;
  },

  Cards: async (args, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const result = await db.cards();
    return result;
  },

  Category: async (args, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const result = await db.category(args.name);
    return result;
  },

  Categories: async (args, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const result = await db.categories();
    return result;
  }

  // launch: async (args, context) => {
  //   const result = await instance.get(`/launches/${args.flight_number}`);
  //   return result.data;
  // },

  // rockets: async (args, context) => {
  //   const result = await instance.get("/rockets/");
  //   return result.data;
  // },

  // rocket: async (args, context) => {
  //   const result = await instance.get(`/rockets/${args.id}`);
  //   return result.data;
  // }
};
