import { Tooltip } from '@material-ui/core';
import React from 'react';
import styles from './main.module.css';
import useStyles from './useStyles';

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <div id={styles.element1}>
        Buying options
        <div className={styles.fRight}>
          <div id={styles.about}>
            About
            <Tooltip
              title={(
                <div>
                  <p className={styles.tooltipTop}>
                    Unless otherwise indicated, items are ranked based on relevance,
                    including your search terms and other Google activity.&nbsp;
                    <a href="https://support.google.com/googleshopping/answer/9116422">Learn more</a>
                    <br />
                    about managing how your experience is personalized. Some ads data,
                    including your and other users’ interactions with ads, is used to improve the
                    quality of the results. Google is not compensated for clicks into these results.
                  </p>
                  <p className={styles.tooltipBottom}>
                    Items you can buy on Google are indicated by the cart icon.
                    Google may receive a commission for the purchase of these items.
                    <br />
                    <a href="https://support.google.com/googleshopping/answer/9128904">Learn more</a>
                    &nbsp;about Google Shopping.
                  </p>
                </div>
              )}
              arrow
              placement="bottom-end"
              background="default"
              classes={{
                tooltip: classes.tooltip,
                arrow: classes.arrow,
              }}
              interactive
            >
              <span className={styles.infoTooltip}>&#9432;</span>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
