const db = require("../db");

module.exports = {
  addComment: async (args, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const result = await db.addComment(args, context);
    return result;
  }
};
