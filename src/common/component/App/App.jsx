/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import ComponentNavbar from '../Navbar';
import ComponentDrawerVariant from '../Drawer/Variant';
import ComponentFooter from '../Footer';
import ComponentNotification from '../Notification';
import './style.css';

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
        <ComponentDrawerVariant />
        <ComponentNotification />

        <div
          style={{
            width: '100%',
            height: '40px',
          }}
        />

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
