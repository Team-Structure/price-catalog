/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-undef */
const { expect } = require('chai');
const mongoose = require('mongoose');
const request = require('supertest')('http://localhost:3002');
const { Price } = require('../database/models/prices');
const { Seller } = require('../database/models/sellers');

mongoose.connect('mongodb://localhost/seller-catalog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

describe('Database seeded', () => {
  it('Database seeded with 100 Products', () => {
    let productCount = 0;
    Price.countDocuments()
      .then((count) => {
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

describe('Test API routes', () => {
  const priceOptions = [9.99, 19.99, 29.99, 39.99, 49.99, 59.99, 99.99];
  const sellerOptions = [
    'Tortor',
    'Nisl',
    'Consequat',
    'Vulputate Ut',
    'Adipiscing Elit Pellentesque',
    'Fames Nunc',
    'Ultricies',
    'Morbi',
    'Odio',
    'Sit Amet',
  ];

  it('Fetch product pricing data with productId, test /product/prices route', () => {
    request.get('/api/product/prices?productId=1')
      .expect((res) => {
        expect(res.body[0].productId).to.equal(1);
        expect(res.body.length).to.equal(1);
      })
      .end((err) => {
        if (err) throw err;
      });
  });

  it('Fetch product pricing data, test /product/prices route', () => {
    request.get('/api/product/prices')
      .expect((res) => {
        expect(priceOptions.includes(res.body[0].seller[0].price)).to.equal(true);
        expect(res.body.length).to.equal(100);
      })
      .end((err) => {
        if (err) throw err;
      });
  });

  it('Fetch product seller data, test /product/sellers route', () => {
    request.get('/api/product/sellers')
      .expect((res) => {
        expect(sellerOptions.includes(res.body[0].name)).to.equal(true);
      })
      .end((err) => {
        if (err) throw err;
      });
  });

  it('Fetch product quotes data, test /product/quotes route', () => {
    request.get('/api/product/quotes')
      .expect((res) => {
        expect(priceOptions.includes(res.body[0].seller[0].price)).to.equal(true);
        expect(sellerOptions.includes(res.body[0].seller[0].name)).to.equal(true);
      })
      .end((err) => {
        if (err) throw err;
      });
  });
});

describe('Test helper functions', () => {
  const {
    sellerName,
    sellerOffer,
    sellerReturnPolicy,
    sellerShippingFee,
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
    const passName = sellerName(passId, sellersSample);
    expect(passName).to.equal('Test');
  });

  it('name helper returns empty string when id does not exist in sellersSample', () => {
    const failName = sellerName(failId, sellersSample);
    expect(failName).to.equal('');
  });

  it('offer helper returns offer when id exists in sellersSample', () => {
    const passOffer = sellerOffer(passId, sellersSample);
    expect(passOffer).to.equal(`Free delivery by ${dayOfTheWeek[deliveryDay.getDay()]}, ${month[deliveryDay.getMonth()]} ${deliveryDay.getDate()}`);
  });

  it('offer helper returns empty string when id does not exist in sellersSample', () => {
    const failOffer = sellerOffer(failId, sellersSample);
    expect(failOffer).to.equal('');
  });

  it('returnPolicy helper returns returnPolicy when id exists in sellersSample', () => {
    const passReturn = sellerReturnPolicy(passId, sellersSample);
    expect(passReturn).to.equal('Test Return');
  });

  it('returnPolicy helper returns empty string when id does not exist in sellersSample', () => {
    const failReturn = sellerReturnPolicy(failId, sellersSample);
    expect(failReturn).to.equal('');
  });

  it('shippingFee helper returns shippingFee when id exists in sellersSample', () => {
    const passShipping = sellerShippingFee(passId, sellersSample);
    expect(passShipping).to.equal(0);
  });

  it('shippingFee helper returns empty string when id does not exist in sellersSample', () => {
    const failShipping = sellerShippingFee(failId, sellersSample);
    expect(failShipping).to.equal('');
  });
});
