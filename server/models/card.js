const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = new Schema({
  name: String,
  gasReward: {
    type: Number,
    default: 1
  },
  restaurantReward: {
    type: Number,
    default: 1
  },
  onlineReward: {
    type: Number,
    default: 1
  },
  travelReward: {
    type: Number,
    default: 1
  },
  desc: String,
  website: String
});

module.exports = mongoose.model('Cards', cardSchema);
