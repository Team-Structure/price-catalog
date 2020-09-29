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
    Price.find()
      .then((data) => {
        mongoose.disconnect();
        productCount = data.length;
        expect(productCount).to.equal(100);
      });
  });

  it('Database seeded with 10 Sellers', () => {
    // mongoose.connect('mongodb://localhost/seller-catalog', { useMongoClient: true });
    // const db = mongoose.connection;
    let sellerCount = 0;
    Seller.find()
      .then((data) => {
        sellerCount = data.length;
        expect(sellerCount).to.equal(10);
      });
  });
});
