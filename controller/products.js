const { retrievePrices } = require('../database/models/prices');
const { retrieveSellers } = require('../database/models/sellers');
const { createQuotes } = require('../services/quotes');

const prices = (req, res) => {
  retrievePrices()
    .then((data) => res.send(data));
};

const sellers = (req, res) => {
  retrieveSellers()
    .then((data) => res.send(data));
};

const quotes = (req, res) => {
  let priceInfo;
  let sellerInfo;

  retrieveSellers()
    .then((data) => {
      sellerInfo = data;
      return retrievePrices();
    })
    .then((data) => {
      priceInfo = data;
      return true;
    })
    .then(() => {
      createQuotes(priceInfo, sellerInfo, req.query);
    });
  res.send('Hello World!');
};

module.exports = {
  prices,
  sellers,
  quotes,
};
