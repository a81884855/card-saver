const mongoose = require('mongoose');

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
  gasLimit: {
    type: Number,
    default: 10000
  },
  restaurant: {
    type: Number,
    default: 1
  },
  restaurantAdditional: {
    type: String,
    default: ''
  },
  restaurantLimit: {
    type: Number,
    default: 10000
  },
  online: {
    type: Number,
    default: 1
  },
  onlineAdditional: {
    type: String,
    default: ''
  },
  onlineLimit: {
    type: Number,
    default: 10000
  },
  grocery: {
    type: Number,
    default: 1
  },
  groceryAdditional: {
    type: String,
    default: ''
  },
  groceryLimit: {
    type: Number,
    default: 10000
  },
  streaming: {
    type: Number,
    default: 1
  },
  streamingAdditional: {
    type: String,
    default: ''
  },
  streamingLimit: {
    type: Number,
    default: 10000
  },
  travel: {
    type: Number,
    default: 1
  },
  travelAdditional: {
    type: String,
    default: ''
  },
  travelLimit: {
    type: Number,
    default: 10000
  },
  furnitures: {
    type: Number,
    default: 1
  },
  furnituresAdditional: {
    type: String,
    default: ''
  },
  furnituresLimit: {
    type: Number,
    default: 10000
  },
  utilities: {
    type: Number,
    default: 1
  },
  utilitiesAdditional: {
    type: String,
    default: ''
  },
  utilitiesLimit: {
    type: Number,
    default: 10000
  },
  phone: {
    type: Number,
    default: 1
  },
  phoneAdditional: {
    type: String,
    default: ''
  },
  phoneLimit: {
    type: Number,
    default: 10000
  },
  desc: String,
  website: String,
  annual: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Cards', cardSchema);
