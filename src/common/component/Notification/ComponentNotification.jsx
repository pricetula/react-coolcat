import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import Snackbar from 'material-ui/Snackbar';

const styles = theme => (
  {
    progress: {
      margin: `0 ${theme.spacing.unit * 2}px`,
    },
    snackbar: {
      backgroundColor: theme.palette.primary,
    },
  }
);

class Mycomponent extends Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.renderLoader = this.renderLoader.bind(
      this,
    );
  }

  renderLoader(
  ) {
    const {
      classes,
      notification: {
        loading,
      },
    } = this.props;

    return loading && (
      <CircularProgress
        size={16}
        thickness={8}
        className={classes.progress}
      />
    );
  }

  render(
  ) {
    const {
      classes,
      notification: {
        notification,
        error,
        warning,
      },
    } = this.props;

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
            {
              this.renderLoader(
              )
            }
            {notification}
          </span>
        }
      />
    );
  }
}

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
  notification: PropTypes.shape(
    {
      notification: PropTypes.string.isRequired,
      error: PropTypes.bool.isRequired,
      warning: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired,
    },
  ).isRequired,
};

export default withStyles(
  styles,
)(
  Mycomponent,
);
