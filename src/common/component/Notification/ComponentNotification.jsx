import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';

const styles = theme => (
  {
    close: {
      width: theme.spacing.unit * 4,
      height: theme.spacing.unit * 4,
    },
  }
);

function Component(
  {
    classes,
    notification,
  },
) {
  return (
    <Snackbar
      anchorOrigin={
        {
          vertical: 'top',
          horizontal: 'left',
        }
      }
      open={notification.length > 0}
      SnackbarContentProps={
        {
          'aria-describedby': 'message-id',
        }
      }
      message={
        <span id="message-id">
          {notification}
        </span>
      }
    />
  );
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  notification: PropTypes.string.isRequired,
};

export default withStyles(
  styles,
)(
  Component,
);
