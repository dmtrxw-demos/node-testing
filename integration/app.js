const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Player = require('./models/player');

const port = 3000;

mongoose.connect('mongodb://localhost:27017/integration-example-' + process.env.NODE_ENV);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/players', function(req, res, next) {
  Player
    .find({})
    .then(function(players) {
      res.status(200).json(players);
    })
    .catch(next);
});

app.post('/players', function(req, res, next) {
  const { name, position } = req.body;

  Player
    .create({ name, position })
    .then(function(player) {
      res.status(201).json(player);
    })
    .catch(next);
});

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).json({
    message: 'Whoa',
  });
});

module.exports = app;
