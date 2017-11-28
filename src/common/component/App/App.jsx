/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

function App(
  {
    route,
  },
) {
  return (
    <div>
      <h1>Welcome</h1>

      <Link to="/simple">Simple</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/">Home</Link>

      {
        renderRoutes(
          route.routes,
        )
      }
    </div>
  );
}

App.propTypes = {
  route: PropTypes.object.isRequired,
};

export default App;
