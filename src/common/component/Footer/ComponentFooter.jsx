import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

export const styles = theme => (
  {
    root: {
      flex: '1 100%',
      width: '100%',
      backgroundColor: theme.palette.grey[900],
    },
    text: {
      color: theme.palette.grey[300],
      textAlign: 'center',
    },
  }
);

function Mycomponent(
  {
    classes,
  },
) {
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-around"
        className={classes.sectionContainer}
        style={
          {
            height: 80,
          }
        }
      >
        <Grid
          item
          xs={10}
        >
          <Typography
            className={classes.text}
            type="body2"
          >
            &copy; 2017
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Mycomponent;
