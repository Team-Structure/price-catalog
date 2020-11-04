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
      // url: 'http://18.220.123.159/api/product/quotes',
      url: 'http://localhost:3002/api/product/quotes',
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
              <span>
                <img id={styles.gImage} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB5UlEQVR4Ae2YAUSDQRiGP4QQQgghQIAQhoAQQoAAA4Twj3+3DWgEGAIEGMIQQgAIMAwBhhCGIQwhDOv7OCT3Ntvduxn38gL77573/u+7+2+SRVVWVlZWu93ecs5dqV/VsxX5TV1ICjUajXs6MHC9Xr+QWDnnJnxY6JcUAWZr9GjTA3xQAghJ6wyQA9i2uVkBMDx/F6LA43OAH4AAb+6IiR6AAG+nv5j4AXjw9AAAqiDA8wIAqIIAzwsAoIoE8PwAts0hKAOOhOcHsMuOhnj6L0QEPDfAAiEi4IkBIkIE4Vut1uHK7gMKvLNcCLzyzWbzNPD7vsRKod7/DmyTiQmHwPD47l0NPPMssbJBAgPfCRAIAeHnzNNJEeAmVJsGKlhWEuf2OazgPXVlzhz7GvoLv+kI6eQHoByqYuL9dfMpXqwymtjOkQC+4pybUrdZmwQ05qAsy73ItzsOLQ4YNypED4QYGsgS450AeLuJ3Upq2YpY84IQE3Uxr7FNtVpt1wBDTevdx+MkKCU0sffIatcfSvu/S0V95px78KsOn/fP8WRwIESsx2VZHglDoH5HCeEH9JUHPdGNBP9Wd7Tmt2VdUoBjf05MFwTv4t1rDTIY7Y1rH2YYaM6B+lF/cxn4mt1QZWVlZf0AHtXl4laolpgAAAAASUVORK5CYII" alt="guaranteeImage" />
              </span>
              Google Guarantee
              <span className={styles.infoTooltip}>
                &#9432;
                <span gInfoText="gInfoText" className={styles.gInfoText}>
                  If anything goes wrong with your order, Google will help make it right.
                </span>
              </span>
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
