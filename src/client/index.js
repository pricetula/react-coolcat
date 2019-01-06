/* eslint-disable no-undef */
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import app from '../common/component/app';
import store from '../common/redux/sagaPort';

hydrate(
  <Provider store={store}>
    <HashRouter>
      <CookiesProvider>
        {app()}
      </CookiesProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('react-root'),
);
