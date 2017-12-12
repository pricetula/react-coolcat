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
      backgroundColor: theme.palette.common.white,
      height: 400,
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
      <Grid
        item
        xs={12}
      >
        <Paper className={classes.paper} />
      </Grid>

      <Grid
        item
        xs={12}
      >
        <Paper className={classes.paper} />
      </Grid>
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
