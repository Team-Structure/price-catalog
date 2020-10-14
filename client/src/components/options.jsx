import React from 'react';

const Options = () => (
  <div>
    <div className="sellerOption">
      <div>
        <div className="total">$15.15</div>
        <div>+$1.23 est. tax</div>
        <div>Free delivery</div>
        <div className="store">
          Walmart
        </div>
      </div>
      <div className="buttonSpace">
        <div className="actionButton actionColor actionColor">
          Visit site
        </div>
      </div>
    </div>
    <div className="sellerOption">
      <div>
        <div className="total">$16.99</div>
        <div>+$1.61 est. tax</div>
        <div>Spend $20 for free delivery by Mon, Oct 19</div>
        <div>Return-eligible for 30 days</div>
        <div className="store">
          Stuff From India
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
    <div className="sellerOption">
      <div>
        <div className="total">$27.63</div>
        <div>+$2.23 est. tax</div>
        <div>Free delivery by Wed, Oct 21</div>
        <div>Return-eligible for 30 days</div>
        <div className="store">
          Swiftsy
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
  </div>
);

export default Options;
