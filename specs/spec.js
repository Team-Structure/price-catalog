/* eslint-disable global-require */
/* eslint-disable no-undef */
const { expect } = require('chai');
const mongoose = require('mongoose');
const { Price, retrievePrices } = require('../database/models/prices');
const { Seller, retrieveSellers } = require('../database/models/sellers');

describe('Database seeded', () => {
  before(() => {
    mongoose.connect('mongodb://localhost/seller-catalog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  });
  after(() => {
    mongoose.disconnect();
  });

  it('Database seeded with 100 Products', () => {
    let productCount = 0;
    Price.countDocuments()
      .then((count) => {
        mongoose.disconnect();
        productCount = count;
        expect(productCount).to.equal(100);
      });
  });

  it('Database seeded with 10 Sellers', () => {
    let sellerCount = 0;
    Seller.countDocuments()
      .then((count) => {
        sellerCount = count;
        expect(sellerCount).to.equal(10);
      });
  });
});

describe('Test helper functions', () => {
  const {
    name,
    offer,
    returnPolicy,
    shippingFee,
  } = require('../services/helper');

  const sellersSample = [{
    id: 1,
    name: 'Test',
    returnPolicy: 'Test Return',
    shippingFee: 'Test Shipping Fee',
    delivery: {
      free: 'True',
      minimumPurchase: 0,
      days: 3,
      fee: 0,
    },
  }];

  const passId = 1;
  const failId = 2;

  const deliveryDay = new Date();
  deliveryDay.setDate(deliveryDay.getDate() + sellersSample[0].delivery.days);
  const dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  it('name helper returns seller name when id exists in sellersSample', () => {
    const passName = name(passId, sellersSample);
    expect(passName).to.equal('Test');
  });

  it('offer helper returns empty string when id does not exist in sellersSample', () => {
    const failName = name(failId, sellersSample);
    expect(failName).to.equal('');
  });

  it('offer helper returns offer when id exists in sellersSample', () => {
    const passOffer = offer(passId, sellersSample);
    expect(passOffer).to.equal(`Free delivery by ${dayOfTheWeek[deliveryDay.getDay()]}, ${month[deliveryDay.getMonth()]} ${deliveryDay.getDate()}`);
  });

  it('offer helper returns empty string when id does not exist in sellersSample', () => {
    const failOffer = offer(failId, sellersSample);
    expect(failOffer).to.equal('');
  });

  it('returnPolicy helper returns returnPolicy when id exists in sellersSample', () => {
    const passReturn = returnPolicy(passId, sellersSample);
    expect(passReturn).to.equal('Test Return');
  });

  it('returnPolicy helper returns empty string when id does not exist in sellersSample', () => {
    const failReturn = returnPolicy(failId, sellersSample);
    expect(failReturn).to.equal('');
  });

  it('shippingFee helper returns shippingFee when id exists in sellersSample', () => {
    const passShipping = shippingFee(passId, sellersSample);
    expect(passShipping).to.equal(0);
  });

  it('shippingFee helper returns empty string when id does not exist in sellersSample', () => {
    const failShipping = shippingFee(failId, sellersSample);
    expect(failShipping).to.equal('');
  });
});
