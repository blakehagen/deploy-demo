import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import styles from './main.scss';

import App from 'components/App';
import Sample from 'components/Sample';

ReactDOM.render(
  <div className={styles.appBody}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/new-route" component={Sample} />
      <Route path="*" component={App}>
        <IndexRedirect to="/"/>
      </Route>

    </Router>
  </div>, document.getElementById('app')
);