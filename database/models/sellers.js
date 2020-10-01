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

module.exports.Seller = mongoose.model('Seller', sellerSchema);
