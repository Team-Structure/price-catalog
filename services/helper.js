/* eslint-disable no-plusplus */

module.exports = {
  name: (id, sellers) => {
    let name = '';
    for (let i = 0; i < sellers.length; i++) {
      if (sellers[i].id === id) {
        name = sellers[i].name;
        break;
      }
    }
    return name;
  },
  offer: (id, sellers) => {
    let offer = '';
    for (let i = 0; i < sellers.length; i++) {
      if (sellers[i].id === id) {
        const { delivery } = sellers[i];
        const deliveryDay = new Date();
        deliveryDay.setDate(deliveryDay.getDate() + delivery.days);
        const dayOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        if (delivery.free === 'True') {
          offer = `Free delivery by ${dayOfTheWeek[deliveryDay.getDay()]}, ${month[deliveryDay.getMonth()]} ${deliveryDay.getDate()}`;
        } else {
          offer = `Spend $${delivery.minimumPurchase} for free delivery by ${dayOfTheWeek[deliveryDay.getDay()]}, ${month[deliveryDay.getMonth()]} ${deliveryDay.getDate()}`;
        }
      }
    }
    return offer;
  },
  returnPolicy: (id, sellers) => {
    let returnPolicy = '';
    for (let i = 0; i < sellers.length; i++) {
      if (sellers[i].id === id) {
        returnPolicy = sellers[i].returnPolicy;
        break;
      }
    }
    return returnPolicy;
  },
  shippingFee: (id, sellers) => {
    let shippingFee = '';
    for (let i = 0; i < sellers.length; i++) {
      const { delivery } = sellers[i];
      if (sellers[i].id === id) {
        shippingFee = delivery.fee;
        break;
      }
    }
    return shippingFee;
  },
};
