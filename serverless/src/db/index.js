const mongoose = require("mongoose");
const categorySchema = require("../models/category");
const cardSchema = require("../models/card");
const commentSchema = require("../models/comment");
const { mongoDBUri } = require("../config.json");

let conn = null;

const connFunc = async (connection, name, Schema) => {
  if (connection == null) {
    connection = await mongoose.createConnection(mongoDBUri, {
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0 // and MongoDB driver buffering
    });
    connection.model(name, new mongoose.Schema(Schema));
    return connection;
  }

  return connection;
};

module.exports = {
  categories: async () => {
    conn = await connFunc(conn, "category", categorySchema);

    const Categroy = conn.model("category");

    const result = await Categroy.find({});

    return result;
  },

  cards: async () => {
    conn = await connFunc(conn, "card", cardSchema);

    const Card = conn.model("card");

    const result = await Card.find({});

    return result;
  },

  addComment: async (args, context) => {
    conn = await connFunc(conn, "comment", commentSchema);

    const Comment = conn.model("comment");

    const comment = new Comment({
      title: args.title,
      content: args.content
    });

    return comment.save();
  }
};
