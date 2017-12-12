import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import logoImageSrc from '../../../../assets/logo.png';

const styles = theme => (
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

function Component(
  props,
) {
  const {
    actionUiState,
    classes,
  } = props;

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

          <Button
            color={classes.textColor}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  actionUiState: PropTypes.func.isRequired,
};

export default withStyles(
  styles,
)(
  Component,
);
