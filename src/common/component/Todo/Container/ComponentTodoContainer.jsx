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
import ComponentTodoForm from '../Form';

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
        <h2>Todo Page</h2>
        <ComponentTodoForm />
        <ComponentAccountSignupSigninContainer />
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
