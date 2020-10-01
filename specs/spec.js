/* eslint-disable no-undef */
const { expect } = require('chai');
const mongoose = require('mongoose');
const { Price } = require('../database/models/prices');
const { Seller } = require('../database/models/sellers');

describe('Database seeded', () => {
  before(() => {
    mongoose.connect('mongodb://localhost/seller-catalog', { useMongoClient: true });
  });
  after(() => {
    mongoose.disconnect();
  });

  it('Database seeded with 100 Products', () => {
    let productCount = 0;
    Price.count()
      .then((count) => {
        mongoose.disconnect();
        productCount = count;
        expect(productCount).to.equal(100);
      });
  });

  it('Database seeded with 10 Sellers', () => {
    let sellerCount = 0;
    Seller.count()
      .then((count) => {
        sellerCount = count;
        expect(sellerCount).to.equal(10);
      });
  });
});
