const { retrievePrices } = require('../database/models/prices');
const { retrieveSellers } = require('../database/models/sellers');
const { createQuotes } = require('../services/quotes');

const prices = (req, res) => {
  console.log('log', req.query.productId);
  if (req.query.productId !== undefined) {
    retrievePrices(req.query.productId)
      .then((productData) => res.send(productData));
  } else {
    retrievePrices()
      .then((productData) => res.send(productData));
  }
};

const sellers = (req, res) => {
  retrieveSellers()
    .then((sellerData) => res.send(sellerData));
};

const quotes = (req, res) => {
  let priceInfo;
  let sellerInfo;
  let id = null;
  if (req.query.productId) {
    id = req.query.productId;
  }

  retrieveSellers()
    .then((sellerData) => {
      sellerInfo = sellerData;
      return retrievePrices(id);
    })
    .then((productData) => {
      priceInfo = productData;
      return true;
    })
    .then(() => createQuotes(priceInfo, sellerInfo, req.query.sellerLimit))
    .then((quoteData) => res.send(quoteData));
};

module.exports = {
  prices,
  sellers,
  quotes,
};
