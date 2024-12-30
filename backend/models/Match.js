const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  homeTeam: {
    type: String,
    required: true,
  },
  awayTeam: {
    type: String,
    required: true,
  },
  matchDate: {
    type: Date,
    required: true,
  },
  bettingOdds: {
    homeWin: {
      type: Number,
      required: true,
    },
    draw: {
      type: Number,
      required: true,
    },
    awayWin: {
      type: Number,
      required: true,
    },
  },
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
