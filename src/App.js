import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainView from './components/MainView';

export default () => (
  <Router>
    <Route path="/(|home|contacts|favourites|people|companies)/" component={MainView} />
  </Router>
);
