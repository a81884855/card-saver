const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = new Schema({
  name: String,
  image: String,
  gasReward: {
    type: Number,
    default: 1
  },
  gasReward_additional: {
    type: String,
    default: ''
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
