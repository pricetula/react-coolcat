import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, {
  MenuItem,
} from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import logoImageSrc from '../../../../assets/logo.png';

export const styles = theme => (
  {
    root: {
      top: 0,
      left: 0,
      marginTop: 0,
      width: '100%',
    },
    appBar: {
      backgroundColor: theme.palette.common.white,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: 0,
      marginRight: 0,
    },
    textColor: '#191919',
  }
);

class Mycomponent extends Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.handleClose = this.handleClose.bind(
      this,
    );

    this.state = {
      anchorEl: null,
      openMenuIndex: 0,
    };
  }

  handleClose(
  ) {
    this.setState(
      {
        openMenuIndex: 0,
        anchorEl: null,
      },
    );
  }

  render(
  ) {
    const {
      actionUiState,
      classes,
      uiState: {
        stateSigninSignupOpen,
      },
      actionSignout,
    } = this.props;

    const {
      anchorEl,
      openMenuIndex,
    } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          className={classes.appBar}
          position="fixed"
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color={classes.textColor}
              aria-label="Menu"
              onClick={
                (
                ) => actionUiState(
                  'STATE_LDRAWER_OPEN',
                  )
              }
            >
              <MenuIcon />
            </IconButton>

            <Typography
              type="title"
              color={classes.textColor}
              className={classes.flex}
            >
              <img
                src={logoImageSrc}
                alt="logo"
                width={65}
                height={40}
              />
            </Typography>

            <IconButton
              aria-owns={
                stateSigninSignupOpen
                  ? 'menu-public'
                  : 'menu-account'
              }
              aria-haspopup="true"
              className={classes.menuButton}
              color={classes.textColor}
              aria-label="Menu"
              onClick={
                event => this.setState(
                  {
                    openMenuIndex: stateSigninSignupOpen ? 1 : 2,
                    anchorEl: event.currentTarget,
                  },
                )
              }
            >
              <MoreVertIcon />
            </IconButton>

            <Menu
              id="menu-account"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openMenuIndex === 2}
              onClose={this.handleClose}
              onRequestClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Account Settings</MenuItem>
              <MenuItem onClick={this.handleClose}>Technical Details</MenuItem>
              <MenuItem onClick={this.handleClose}>Get In Touch</MenuItem>
              <MenuItem
                onClick={
                  (
                  ) => {
                    this.handleClose(
                    );
                    actionSignout(
                    );
                  }
                }
              >
                Sign Out
              </MenuItem>
            </Menu>

            <Menu
              id="menu-public"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openMenuIndex === 1}
              onClose={this.handleClose}
              onRequestClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Technical Details</MenuItem>
              <MenuItem onClick={this.handleClose}>Get In Touch</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
  actionUiState: PropTypes.func.isRequired,
  actionSignout: PropTypes.func.isRequired,
  uiState: PropTypes.shape(
    {
      stateSigninSignupOpen: PropTypes.bool.isRequired,
    },
  ).isRequired,
};

export default Mycomponent;
