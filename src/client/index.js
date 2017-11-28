/* eslint-disable no-undef */
import React from 'react';
import { hydrate } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import app from '../common/component/app';

hydrate(
  <BrowserRouter>
    {
      app(
      )
    }
  </BrowserRouter>,
  document.getElementById(
    'react-root',
  ),
);
