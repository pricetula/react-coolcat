/* eslint-disable no-undef */
import React from 'react';
import { hydrate } from 'react-dom';
import App from '../common/App';

hydrate(
  <App />,
  document.getElementById(
    'react-root',
  ),
);
