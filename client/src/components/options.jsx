/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import $ from 'jquery';
import styles from './main.module.css';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      quotes: [],
      error: null,
    };
  }

  componentDidMount() {
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
      .fail(() => {
        this.setState({
          error: 'Product Not Found.',
        });
      });
  }

  render() {
    if (this.state.error) {
      return <h3>{this.state.error}</h3>;
    }
    if (this.state.quotes.length) {
      const sellerOptions = this.state.quotes[0].seller.map((option) => (
        <div className={styles.sellerOption} key={option.id}>
          <div>
            <div className={styles.total}>{`$${option.totalPrice}`}</div>
            <div>{`$${option.tax} est. tax`}</div>
            <div>{option.offer}</div>
            <div>{option.returnPolicy}</div>
            <div className={styles.store}>
              {option.name}
            </div>
            <div className={styles.gGuarantee}>
              Google Guarantee &#9432;
            </div>
          </div>
          <div className={styles.buttonSpace}>
            <div className={styles.fRight}>
              <div className={`${styles.actionButton} ${styles.actionColor}`}>
                <span className={styles.cartSymbol} />
                Add to cart
              </div>
              <div className={`${styles.actionButton} ${styles.checkoutColor}`}>
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
