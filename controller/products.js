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
  let id = null;
  if (req.query.productId) {
    id = req.query.productId;
  }

  retrieveSellers()
    .then((data) => {
      sellerInfo = data;
      return retrievePrices(id);
    })
    .then((data) => {
      priceInfo = data;
      return true;
    })
    .then(() => createQuotes(priceInfo, sellerInfo, req.query.sellerLimit))
    .then((data) => res.send(data));
};

module.exports = {
  prices,
  sellers,
  quotes,
};
