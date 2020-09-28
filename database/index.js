const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/price-catalog', { useMongoClient: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongo is connected');
});

const priceSchema = new mongoose.Schema({
  productId: { type: Number, unique: true },
  seller: [{
    id: Number,
    name: String,
    offer: String,
    returnPolicy: String,
    price: Number,
    tax: Number,
    shippingFee: Number,
    totalPrice: Number,
  }],
});

const Price = mongoose.model('Price', priceSchema);

const savePrice = () => {
  const price = new Price({
    productId: 1,
    seller: [
      {
        id: 2,
        name: 'Sample',
        offer: 'Sample',
        returnPolicy: 'Sample',
        price: 2,
        tax: 2,
        shippingFee: 2,
        totalPrice: 2,
      },
      {
        id: 3,
        name: 'Sample',
        offer: 'Sample',
        returnPolicy: 'Sample',
        price: 2,
        tax: 2,
        shippingFee: 2,
        totalPrice: 2,
      },
    ],
  });

  return price.save()
    .then((data) => {
      console.log('Saved', data.seller.length);
    })
    .catch((err) => {
      console.log('Error', err.errmsg);
    });
};

savePrice();

const sellerSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
});

const Seller = mongoose.model('Seller', sellerSchema);

const saveSeller = () => {
  const seller = new Seller({
    id: 1,
    name: 'Walmart',
  });

  return seller.save()
    .then((data) => {
      console.log('Saved seller', data.seller.length);
    })
    .catch((err) => {
      console.log('Error', JSON.stringify(err));
    });
};

saveSeller();
