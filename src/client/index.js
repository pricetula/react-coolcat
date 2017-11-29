/* eslint-disable no-undef */
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import app from '../common/component/app';
import store from '../common/redux/sagaPort';

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {
        app(
        )
      }
    </BrowserRouter>
  </Provider>,
  document.getElementById(
    'react-root',
  ),
);
