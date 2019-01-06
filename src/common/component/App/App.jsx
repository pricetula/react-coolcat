/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import './style.css';

const App = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
);

App.propTypes = {
  route: PropTypes.object.isRequired,
};

export default App;
