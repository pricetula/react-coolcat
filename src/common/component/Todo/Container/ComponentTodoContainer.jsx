import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
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
        <h2>Todo Page</h2>
        <ComponentTodoForm />
        <ComponentTodoList />
        <ComponentAccountSignupSigninContainer />
      </div>
    );
  }
}

Mycomponent.propTypes = {
  actionGetUser: PropTypes.func.isRequired,
};

export default Mycomponent;
