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
import ComponentTodoList from '../List';

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
        <ComponentTodoForm />
        <ComponentTodoList />
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
