import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import IconClose from 'material-ui-icons/Close';
import IconPersonAdd from 'material-ui-icons/PersonAdd';
import IconPersonOutline from 'material-ui-icons/PersonPin';
import TabContainer from '../../../mui/Component/TabContainer';
import Transition from '../../../mui/Component/Transition';
import ComponentAccountSignin from '../Signin';
import ComponentAccountSignup from '../Signup';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

class FullScreenDialog extends React.Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.handleTabChange = this.handleTabChange.bind(
      this,
    );

    this.state = {
      value: 0,
    };
  }

  handleTabChange(
    event,
    value,
  ) {
    this.setState(
      {
        value,
      },
    );
  }

  render(
  ) {
    const {
      classes,
      uiState: {
        stateSigninSignupOpen,
      },
    } = this.props;

    const {
      value,
    } = this.state;

    return (
      <Dialog
        fullScreen

        open={stateSigninSignupOpen}

        transition={Transition}
      >
        <AppBar className={classes.appBar}>

          <Toolbar>
            <Link
              to="/"
            >
              <IconButton color="contrast" onClick={this.handleClose} aria-label="Close">
                <IconClose />
              </IconButton>
            </Link>

            <Typography type="title" color="inherit" className={classes.flex}>
              Restricted Access
            </Typography>
          </Toolbar>
        </AppBar>

        <div>
          <AppBar
            position="static"
          >
            <Tabs
              centered
              fullWidth
              value={value}
              onChange={this.handleTabChange}
            >
              <Tab
                icon={<IconPersonOutline />}
                label="Sign In"
              />

              <Tab
                icon={<IconPersonAdd />}
                label="Sign Up"
              />
            </Tabs>
          </AppBar>
          {
            value === 0 &&
            (
              <TabContainer>
                <ComponentAccountSignin />
              </TabContainer>
            )
          }

          {
            value === 1 &&
            (
              <TabContainer>
                <ComponentAccountSignup />
              </TabContainer>
            )
          }
        </div>
      </Dialog>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  uiState: PropTypes.shape(
    {
      stateSigninSignupOpen: PropTypes.bool.isRequired,
    },
  ).isRequired,
};

export default withStyles(
  styles,
)(
  FullScreenDialog,
);
