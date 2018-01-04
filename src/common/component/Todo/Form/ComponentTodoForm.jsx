import React from 'react';
import moment from 'moment';
import randomstring from 'randomstring';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import IconSend from 'material-ui-icons/Send';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

class Mycomponent extends React.Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.handleChangeItem = this.handleChangeItem.bind(
      this,
    );

    this.handleChangeDescription = this.handleChangeDescription.bind(
      this,
    );

    this.handleChangeDuedate = this.handleChangeDuedate.bind(
      this,
    );

    this.state = {
      item: '',
      description: '',
      // TODO use a date and time picker
      dueDate: moment(
        new Date(
        ),
      ).add(
        randomstring.generate(
          {
            length: 2,
            charset: 'numeric',
          },
        ),
        'm',
      ).toDate(
      ),
    };
  }

  handleChangeDuedate(
    event,
  ) {
    this.setState(
      {
        dueDate: event.target.value,
      },
    );
  }

  handleChangeItem(
    event,
  ) {
    this.setState(
      {
        item: event.target.value,
      },
    );
  }

  handleChangeDescription(
    event,
  ) {
    this.setState(
      {
        description: event.target.value,
      },
    );
  }

  render(
  ) {
    const {
      classes,
      actionAddTodo,
    } = this.props;

    const {
      item,
      dueDate,
      description,
    } = this.state;

    return (
      <Grid
        container
        className={classes.root}
      >
        <Grid
          item
          xs={12}
        >
          <FormControl
            style={{
              width: '90%',
            }}
            className={classes.formControl}
            aria-describedby="todoitem-helper-text"
          >
            <InputLabel
              htmlFor="todoitem-helper"
            >
              Item
            </InputLabel>

            <Input
              fullWidth
              id="todoitem-helper"
              value={item}
              onChange={this.handleChangeItem}
            />

            <FormHelperText
              id="todoitem-helper-text"
            >
              Something you want to do
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <FormControl
            style={{
              width: '90%',
            }}
            className={classes.formControl}
            aria-describedby="tododescription-helper-text"
          >
            <InputLabel
              htmlFor="tododescription-helper"
            >
              Description
            </InputLabel>

            <Input
              multiline
              id="tododescription-helper"
              value={description}
              onChange={this.handleChangeDescription}
            />

            <FormHelperText
              id="tododescription-helper-text"
            >
              Description of the thing you want to do
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <FormControl
            style={{
              width: '90%',
            }}
            className={classes.formControl}
            aria-describedby="tododuedate-helper-text"
          >
            <InputLabel
              htmlFor="tododuedate-helper"
            >
              Due Date
            </InputLabel>

            <Input
              multiline
              type="datetime-local"
              id="tododuedate-helper"
              value={dueDate}
              onChange={this.handleChangeDuedate}
            />

            <FormHelperText
              id="tododuedate-helper-text"
            >
              Date and Time to get this Todo item done
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Button
            raised
            disabled={
              item.length === 0 ||
              description.length === 0
            }
            className={classes.button}
            color="primary"
            onClick={
              (
              ) => actionAddTodo(
                this.state,
                )
            }
          >
            Add Todo
            <IconSend className={classes.rightIcon} />
          </Button>
        </Grid>
      </Grid>
    );
  }
}

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
  actionAddTodo: PropTypes.func.isRequired,
};

export default withStyles(
  styles,
)(
  Mycomponent,
);
