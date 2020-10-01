const { retrieveQuotes } = require('../database/models/prices');

module.exports.quotes = (req, res) => {
  retrieveQuotes()
    .then((data) => res.send(data));
};
