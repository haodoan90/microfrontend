import React from 'react';
import { Provider } from 'react-redux';
import { Route } from "react-router-dom";

import store from './store';
import App from './App';

export default () => (
  <Provider store={store}>
    <Route path="/tps" component={App} />
  </Provider>
)
