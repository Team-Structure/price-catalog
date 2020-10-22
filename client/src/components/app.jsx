import React from 'react';
import Header from './header';
import Options from './options';
import styles from './main.module.css';

const App = ({ match }) => (
  <div id={styles.container}>
    <Header />
    <Options productId={match.params.id} />
  </div>
);

export default App;
