import React, {
  Component,
} from 'react';
import PropTypes, {
  instanceOf,
} from 'prop-types';
import {
  withCookies,
  Cookies,
} from 'react-cookie';
import ComponentAccountSignupSigninContainer from '../../Account/SignupSigninContainer';

class Mycomponent extends Component {
  componentWillMount(
  ) {
    const {
      actionGetUser,
    } = this.props;

    actionGetUser(
    );
  }

  render(
  ) {
    return (
      <div>
        <ComponentAccountSignupSigninContainer />
        <h2>Todo Page</h2>
      </div>
    );
  }
}

Mycomponent.propTypes = {
  cookies: instanceOf(
    Cookies,
  ).isRequired,
  actionGetUser: PropTypes.func.isRequired,
};

export default withCookies(
  Mycomponent,
);
