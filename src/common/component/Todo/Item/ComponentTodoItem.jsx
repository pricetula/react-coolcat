import React from 'react';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {
  CardActions,
  CardContent,
} from 'material-ui/Card';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

function Mycomponent(
  {
    classes,
    storedRemotely,
    details: {
      item,
      description,
    },
  },
) {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>Item to do</Typography>
        <Typography type="headline" component="h2">
          {item}
        </Typography>
        <Typography className={classes.pos}>description</Typography>
        <Typography component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
  storedRemotely: PropTypes.bool.isRequired,
  details: PropTypes.shape(
    {
      item: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default withStyles(styles)(Mycomponent);
