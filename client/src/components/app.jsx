import React from 'react';
import Header from './header';
import Options from './options';

const App = ({ match }) => (
  <div id="container">
    <Header />
    <Options productId={match.params.id} />
  </div>
);

export default App;
