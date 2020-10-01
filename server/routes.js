const express = require('express');
const products = require('../controller/products');

const router = express.Router();

router.get('/product/quotes', products.quotes);

module.exports = router;
