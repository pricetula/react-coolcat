/* eslint-disable no-undef */
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import app from '../common/component/app';
import store from '../common/redux/sagaPort';
import theme from '../common/mui/theme';

hydrate(
  <Provider store={store}>
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        {
          app(
          )
        }
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById(
    'react-root',
  ),
);
