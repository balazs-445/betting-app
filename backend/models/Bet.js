const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  match: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Match',
    required: true,
  },
  betDetails: {
    type: String,
    required: true,
  },
  betAmount: {
    type: Number,
    required: true,
  },
  potentialWinnings: {
    type: Number,
    required: true,
  },
  betDate: {
    type: Date,
    default: Date.now,
  },
});

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;
