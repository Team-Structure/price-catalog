import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div id="container">
    <div>
      <div id="element1">
        Buying options
        <div className="fRight">
          <div id="about">About &#9432;</div>
        </div>
      </div>
    </div>
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
        <div className="visitButton">Visit site</div>
      </div>
    </div>
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
        <div className="visitButton">Visit site</div>
      </div>
    </div>
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
        <div className="visitButton">Visit site</div>
      </div>
    </div>
  </div>
);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div>Hello React</div>;
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'));
