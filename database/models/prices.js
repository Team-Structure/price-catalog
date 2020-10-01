const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  productId: { type: Number, unique: true },
  seller: [{
    id: Number,
    price: Number,
    tax: Number,
  }],
});

module.exports.Price = mongoose.model('Price', priceSchema);
