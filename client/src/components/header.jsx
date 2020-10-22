import React from 'react';
import styles from './main.module.css';

const Header = () => (
  <div>
    <div id={styles.element1}>
      Buying options
      <div className={styles.fRight}>
        <div id={styles.about}>About &#9432;</div>
      </div>
    </div>
  </div>
);

export default Header;
