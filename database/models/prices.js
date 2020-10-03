const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const priceSchema = new mongoose.Schema({
  productId: { type: Number, unique: true },
  seller: [{
    id: Number,
    price: Number,
    tax: Number,
  }],
});

const Price = mongoose.model('Price', priceSchema);

const retrievePrices = () => Price.find()
  .limit()
  .sort({ productId: 1, 'seller.price': 1 })
  .then((data) => data)
  .catch((err) => console.log(err));

module.exports = {
  Price,
  retrievePrices,
};
