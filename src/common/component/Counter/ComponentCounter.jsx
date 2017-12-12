import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import ComponentCounterHistory from '../CounterHistory';

const styles = theme => (
  {
    root: {
      flexGrow: 1,
    },
    paper: {
      backgroundColor: theme.palette.common.white,
      height: 380,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignContent: 'center',
      alignItems: 'center',
    },
  }
);

function Component(
  {
    classes,
    counter,
    actionIncreaseCount,
    actionDecreaseCount,
    actionResetCount,
    actionAddCounterHistory,
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
        sm={12}
        md={9}
      >
        <Paper className={classes.paper}>
          <Grid
            container
            justify="center"
          >
            <Typography type="headline">
              Counter
            </Typography>
          </Grid>

          <Grid
            container
            justify="center"
          >
            <Typography type="display4">
              {counter}
            </Typography>
          </Grid>

          <Grid
            container
            justify="center"
          >
            <Grid
              style={
                {
                  textAlign: 'center',
                }
              }
              item
              xs={10}
            >
              <Button
                raised
                color="primary"
                onClick={
                  (
                  ) => {
                    actionIncreaseCount(
                    );
                    actionAddCounterHistory(
                      {
                        counter,
                        type: 'Increased',
                      },
                    );
                  }
                }
              >
                Increase Count
              </Button>

              <Button
                raised
                color="red"
                onClick={
                  (
                  ) => {
                    actionResetCount(
                    );
                    actionAddCounterHistory(
                      {
                        counter,
                        type: 'Reset',
                      },
                    );
                  }
                }
              >
                Reset Count
              </Button>

              <Button
                raised
                color="secondary"
                onClick={
                  (
                  ) => {
                    actionDecreaseCount(
                    );
                    actionAddCounterHistory(
                      {
                        type: 'Decreased',
                      },
                    );
                  }
                }
              >
                Decrease Count
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={3}
      >
        <ComponentCounterHistory />
      </Grid>
    </Grid>
  );
}

Component.propTypes = {
  counter: PropTypes.number.isRequired,
  actionAddCounterHistory: PropTypes.func.isRequired,
  actionIncreaseCount: PropTypes.func.isRequired,
  actionDecreaseCount: PropTypes.func.isRequired,
  actionResetCount: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  styles,
)(
  Component,
);
