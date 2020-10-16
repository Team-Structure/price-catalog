/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import $ from 'jquery';

class Options extends React.Component {
  constructor({ productId }) {
    super({ productId });
    this.state = {
      productId,
      quotes: [],
    };
  }

  componentDidMount() {
    console.log('Calling');
    $.ajax({
      url: '/api/product/quotes',
      method: 'GET',
      data: {
        productId: this.state.productId,
        sellerLimit: 3,
      },
    })
      .done((priceQuotes) => {
        this.setState({
          quotes: priceQuotes,
        });
      })
      .fail((error) => console.log(error));
  }

  render() {
    console.log(this.state);

    console.log(this.state.quotes);

    if (this.state.quotes.length) {
      const sellerOptions = this.state.quotes[0].seller.map((option) => (
        <div className="sellerOption" key={option.id}>
          <div>
            <div className="total">{`$${option.totalPrice}`}</div>
            <div>{`$${option.tax} est. tax`}</div>
            <div>{option.offer}</div>
            <div>{option.returnPolicy}</div>
            <div className="store">
              {option.name}
            </div>
            <div className="gGuarantee">
              Google Guarantee &#9432;
            </div>
          </div>
          <div className="buttonSpace">
            <div className="fRight">
              <div className="actionButton actionColor">
                <span className="cartSymbol" />
                Add to cart
              </div>
              <div className="actionButton checkoutColor">
                Quick checkout
              </div>
            </div>
          </div>
        </div>
      ));
      return (
        <div>
          {sellerOptions}
        </div>
      );
    }
    return false;
  }
}

export default Options;
