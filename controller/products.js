/* eslint-disable no-restricted-globals */
const { retrievePrices } = require('../database/models/prices');
const { retrieveSellers } = require('../database/models/sellers');
const { createQuotes } = require('../services/quotes');

const prices = (req, res) => {
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
  let id = null;
  if (req.query.productId) {
    id = req.query.productId;
  }

  if (id && isNaN(Number(id))) {
    return res.status(400).send('Bad Request.');
  }

  if (id && (id < 1 || id > 100)) {
    return res.status(404).send('Product Not Found.');
  }

  let priceInfo;
  let sellerInfo;

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
    .then((quoteData) => res.send(quoteData))
    .catch(() => res.status(500).send('Internal Server Error.'));
};

module.exports = {
  prices,
  sellers,
  quotes,
};
