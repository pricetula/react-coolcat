import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import IconSend from 'material-ui-icons/Send';
import Grid from 'material-ui/Grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

export const styles = theme => ({
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

class Mycomponent extends React.Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      passwordConfirm: '',
    };
  }

  render(
  ) {
    const {
      classes,
      actionSignup,
    } = this.props;

    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
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
            aria-describedby="firstname-helper-text"
          >
            <InputLabel
              htmlFor="firstname-helper"
            >
              First Name
            </InputLabel>

            <Input
              fullWidth
              id="firstname-helper"
              value={firstName}
              onChange={
                ev => this.setState(
                  {
                    firstName: ev.target.value,
                  },
                )
              }
            />

            <FormHelperText
              id="firstname-helper-text"
            >
              Your First Name
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
            aria-describedby="lastname-helper-text"
          >
            <InputLabel
              htmlFor="lastname-helper"
            >
              Last Name
            </InputLabel>

            <Input
              fullWidth
              id="lastname-helper"
              value={lastName}
              onChange={
                ev => this.setState(
                  {
                    lastName: ev.target.value,
                  },
                )
              }
            />

            <FormHelperText
              id="lastname-helper-text"
            >
              Your Last Name
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid
          item
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
              onChange={
                ev => this.setState(
                  {
                    email: ev.target.value,
                  },
                )
              }
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
              fullWidth
              type="password"
              id="password-helper"
              value={password}
              onChange={
                ev => this.setState(
                  {
                    password: ev.target.value,
                  },
                )
              }
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
          <FormControl
            style={{
              width: '90%',
            }}
            className={classes.formControl}
            aria-describedby="passwordc-helper-text"
          >
            <InputLabel
              htmlFor="passwordc-helper"
            >
              Confirm Password
            </InputLabel>

            <Input
              fullWidth
              type="password"
              id="passwordc-helper"
              value={passwordConfirm}
              onChange={
                ev => this.setState(
                  {
                    passwordConfirm: ev.target.value,
                  },
                )
              }
            />

            <FormHelperText
              id="passwordc-helper-text"
            >
              Enter the same Password as above
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
                  firstName.length === 0 ||
                  lastName.length === 0 ||
                  email.length === 0 ||
                  password.length === 0 ||
                  password !== passwordConfirm
                }
                className={classes.button}
                color="primary"
                onClick={
                  (
                  ) => actionSignup(
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

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
  actionSignup: PropTypes.func.isRequired,
};

export default Mycomponent;
