import React from 'react';
import {Link} from 'react-router'
import styles from './app.scss';

const App = () => {
  return (
      <div className={styles.main}>
        <Link to="/new-route">
        <div className={styles.box}>
          MY AWESOME APP!
        </div>
        </Link>
      </div>
  );
};

export default App;