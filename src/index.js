import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/store';
import MainView from './components/MainView';


ReactDOM.render(
  <Provider
    store={store}
  >
    <Router>
      <Route path="/(|home|contacts|favourites|people|companies)/" component={MainView} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
