import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/app';
import '../dist/main.css';

ReactDOM.render(
  <Router>
    <Route path="/products/:id" component={App} />
  </Router>, document.getElementById('price-card'),
);
