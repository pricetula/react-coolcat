import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import ComponentAccountSignupSigninContainer from '../../Account/SignupSigninContainer';
import ComponentTodoForm from '../Form';
import ComponentTodoList from '../List';

export const styles = {
  root: {
    minHeight: 400,
  },
  spacer: {
    height: 50,
  },
};

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
    const {
      classes,
    } = this.props;

    return (
      <Grid
        container
        className={classes.root}
      >
        <Grid
          xs={12}
          item
        >
          <div className={classes.spacer} />
        </Grid>

        <Grid
          xs={12}
          item
        >
          <ComponentTodoForm />
        </Grid>

        <Grid
          xs={12}
          item
        >
          <ComponentTodoList />
        </Grid>

        <Grid
          xs={12}
          item
        >
          <ComponentAccountSignupSigninContainer />
        </Grid>
      </Grid>
    );
  }
}

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
  actionGetUser: PropTypes.func.isRequired,
};

export default Mycomponent;
