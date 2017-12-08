import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = theme => (
  {
    root: {
      flexGrow: 1,
    },
    paper: {
      backgroundColor: theme.palette.grey[900],
      height: 100,
      width: '100%',
    },
  }
);

function Component(
  {
    classes,
  },
) {
  return (
    <Grid
      container
      className={classes.root}
    >
      <Paper className={classes.paper} />
    </Grid>
  );
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  styles,
)(
  Component,
);