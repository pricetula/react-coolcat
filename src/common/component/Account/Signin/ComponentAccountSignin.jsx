import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import IconSend from 'material-ui-icons/Send';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class ComposedTextField extends React.Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.handleChangeEmail = this.handleChangeEmail.bind(
      this,
    );

    this.handleChangePassword = this.handleChangePassword.bind(
      this,
    );

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChangePassword(
    event,
  ) {
    this.setState(
      {
        password: event.target.value,
      },
    );
  }

  handleChangeEmail(
    event,
  ) {
    this.setState(
      {
        email: event.target.value,
      },
    );
  }

  render(
  ) {
    const {
      classes,
      actionSignin,
    } = this.props;

    const {
      email,
      password,
    } = this.state;

    return (
      <Grid
        container
        className={classes.root}
      >
        <Grid
          item
          sm={6}
          xs={12}
        >
          <FormControl
            style={{
              width: '90%',
            }}
            className={classes.formControl}
            aria-describedby="email-helper-text"
          >
            <InputLabel
              htmlFor="email-helper"
            >
              Email
            </InputLabel>

            <Input
              fullWidth
              type="email"
              id="email-helper"
              value={email}
              onChange={this.handleChangeEmail}
            />

            <FormHelperText
              id="email-helper-text"
            >
              Email used to signup for Coolcat
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid
          item
          sm={6}
          xs={12}
        >
          <FormControl
            style={{
              width: '90%',
            }}
            className={classes.formControl}
            aria-describedby="password-helper-text"
          >
            <InputLabel
              htmlFor="password-helper"
            >
              Password
            </InputLabel>

            <Input
              type="password"
              id="password-helper"
              value={password}
              onChange={this.handleChangePassword}
            />

            <FormHelperText
              id="password-helper-text"
            >
              Your Secret Password
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Grid
            container
            alignContent="space-around"
            alignItems="center"
          >
            <Grid
              item
            >
              <Button
                raised
                disabled={
                  email.length === 0 ||
                  password.length === 0
                }
                className={classes.button}
                color="primary"
                onClick={
                  (
                  ) => actionSignin(
                    this.state,
                  )
                }
              >
                Sign In
                <IconSend className={classes.rightIcon} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
  actionSignin: PropTypes.func.isRequired,
};

export default withStyles(
  styles,
)(
  ComposedTextField,
);
