const mongoose = require("mongoose");
const categorySchema = require("../models/category");
const cardSchema = require("../models/card");
const commentSchema = require("../models/comment");
const { mongoDBUri } = require("../config.json");

let conn = null;

const connFunc = async connection => {
  if (connection == null) {
    connection = await mongoose.createConnection(mongoDBUri, {
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0 // and MongoDB driver buffering
    });
    connection.model("category", new mongoose.Schema(categorySchema));
    connection.model("card", new mongoose.Schema(cardSchema));
    connection.model("comment", new mongoose.Schema(commentSchema));

    return connection;
  }

  return connection;
};

module.exports = {
  category: async (name = "") => {
    conn = await connFunc(conn);

    const Categroy = conn.model("category");

    const result = await Categroy.findOne({ name });

    return result;
  },

  categories: async () => {
    conn = await connFunc(conn);

    const Categroy = conn.model("category");

    const result = await Categroy.find({});

    return result;
  },

  card: async name => {
    conn = await connFunc(conn);

    const Card = conn.model("card");

    const result = await Card.findOne({ name });

    return result;
  },

  cards: async () => {
    conn = await connFunc(conn);

    const Card = conn.model("card");

    const result = await Card.find({});

    return result;
  },

  addComment: async (args, context) => {
    conn = await connFunc(conn);

    const Comment = conn.model("comment");

    const comment = new Comment({
      title: args.title,
      content: args.content
    });

    return comment.save();
  }
};
