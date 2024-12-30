const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Match = require('./models/Match');
const Bet = require('./models/Bet');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tippmix', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User authentication routes
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.status(201).send(user);
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).send('Invalid credentials');
  }
  res.status(200).send(user);
});

// Fetch football matches
app.get('/api/matches', async (req, res) => {
  const matches = await Match.find();
  res.status(200).send(matches);
});

// Place bets
app.post('/api/bets', async (req, res) => {
  const { userId, matchId, betDetails } = req.body;
  const bet = new Bet({ user: userId, match: matchId, betDetails });
  await bet.save();
  res.status(201).send(bet);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
