const {
  sellerName,
  sellerOffer,
  sellerReturnPolicy,
  sellerShippingFee,
} = require('./helper');

/* eslint-disable no-plusplus */
module.exports.createQuotes = (prices, sellers, limit) => {
  const response = [];
  const fetchSellerMeta = (num, tag, array) => {
    if (tag === 'name') {
      return sellerName(num, array);
    }
    if (tag === 'offer') {
      return sellerOffer(num, array);
    }
    if (tag === 'returnPolicy') {
      return sellerReturnPolicy(num, array);
    }
    if (tag === 'shippingFee') {
      return sellerShippingFee(num, array);
    }
    return null;
  };

  for (let i = 0; i < prices.length; i++) {
    const product = {
      productId: prices[i].productId,
      seller: [],
    };

    for (let j = 0; j < prices[i].seller.length; j++) {
      const { id, price, tax } = prices[i].seller[j];
      const deliveryFee = fetchSellerMeta(id, 'shippingFee', sellers);
      const sellerObject = {
        id,
        price,
        tax,
        shippingFee: deliveryFee,
        totalPrice: (price + tax + deliveryFee).toFixed(2),
        returnPolicy: fetchSellerMeta(id, 'returnPolicy', sellers),
        name: fetchSellerMeta(id, 'name', sellers),
        offer: fetchSellerMeta(id, 'offer', sellers),
      };
      product.seller.push(sellerObject);
    }
    product.seller.sort((a, b) => a.price - b.price);
    if (limit) {
      product.seller.splice(limit);
    }
    response.push(product);
  }
  return response;
};
