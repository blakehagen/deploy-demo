import React from 'react';
import {Link} from 'react-router'
import styles from './sample.scss';

const Sample = () => {
  return (
      <div className={styles.main}>
        <div className={styles.box}>
          You changed routes!
        </div>

        <Link to="/" className={styles.link}>
          <div> {`<<`} Go Back</div>
        </Link>
      </div>
  );
};

export default Sample;