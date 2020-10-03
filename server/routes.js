const express = require('express');
const products = require('../controller/products');

const router = express.Router();

router.get('/product/prices', products.prices);
router.get('/product/sellers', products.sellers);
router.get('/product/quotes', products.quotes);

module.exports = router;
