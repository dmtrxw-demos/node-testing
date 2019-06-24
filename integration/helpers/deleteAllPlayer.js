const Player = require('../models/player');

module.exports = function() {
  if (process.env.NODE_ENV === 'test') {
    Player
      .deleteMany({})
      .then(function() {
        console.log('Players collection cleared!');
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}
