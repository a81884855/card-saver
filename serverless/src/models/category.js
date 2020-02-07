const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  detail: String,
  merchant: Array
});

module.exports = categorySchema;
