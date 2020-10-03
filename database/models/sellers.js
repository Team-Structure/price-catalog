const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  returnPolicy: String,
  delivery: {
    free: String,
    minimumPurchase: Number,
    days: Number,
    fee: Number,
  },
});

const Seller = mongoose.model('Seller', sellerSchema);

const retrieveSellers = () => Seller.find()
  .limit()
  .sort({ productId: 1 })
  .then((data) => data)
  .catch((err) => console.log(err));

module.exports = {
  Seller,
  retrieveSellers,
};
