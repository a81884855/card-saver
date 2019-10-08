const mongoose = require('mongoose');
const config = require('./config');

mongoose
  .connect(config.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Connection to DB Successfully!');
  })
  .catch(err => {
    throw new Error(err);
  });

const db = mongoose.connection;

const { Schema } = mongoose;

const cardSchema = new Schema({
  name: String,
  image: String,
  bank: String,
  gas: {
    type: Number,
    default: 1
  },
  gasAdditional: {
    type: String,
    default: ''
  },
  restaurant: {
    type: Number,
    default: 1
  },
  restaurantAdditional: {
    type: String,
    default: ''
  },
  online: {
    type: Number,
    default: 1
  },
  onlineAdditional: {
    type: String,
    default: ''
  },
  grocery: {
    type: Number,
    default: 1
  },
  groceryAdditional: {
    type: String,
    default: ''
  },
  streaming: {
    type: Number,
    default: 1
  },
  streamingAdditional: {
    type: String,
    default: ''
  },
  travel: {
    type: Number,
    default: 1
  },
  travelAdditional: {
    type: String,
    default: ''
  },
  furnitures: {
    type: Number,
    default: 1
  },
  furnituresAdditional: {
    type: String,
    default: ''
  },
  utilities: {
    type: Number,
    default: 1
  },
  utilitiesAdditional: {
    type: String,
    default: ''
  },
  phone: {
    type: Number,
    default: 1
  },
  phoneAdditional: {
    type: String,
    default: ''
  },
  desc: String,
  website: String,
  annual: {
    type: Number,
    default: 1
  }
});

module.exports = db;
module.exports.Card = mongoose.model('Cards', cardSchema);
