/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import ComponentNavbar from '../Navbar';
import ComponentFooter from '../Footer';

class App extends Component {
  componentDidMount(
  ) {
    const jssStyles = document.getElementById(
      'jss-server-side',
    );
    if (
      jssStyles &&
      jssStyles.parentNode
    ) {
      jssStyles.parentNode.removeChild(
        jssStyles,
      );
    }
  }

  render(
  ) {
    const {
      route,
    } = this.props;

    if (!route) {
      return <div />;
    }

    return (
      <div>
        <ComponentNavbar />

        <Link to="/counter">Counter</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/">Home</Link>

        {
          renderRoutes(
            route.routes,
          )
        }

        <ComponentFooter />
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.object.isRequired,
};

export default App;
