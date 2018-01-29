import React from 'react';
import moment from 'moment';
import { TimePicker, DatePicker } from 'material-ui-pickers';
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

    this.handleChangeDuetime = this.handleChangeDuetime.bind(
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
      xDueDate: moment(
      ).toObject(
      ),
    };
  }

  handleChangeDuedate(
    myMoment,
  ) {
    const oTime = myMoment.toObject(
    );

    this.setState(
      {
        xDueDate: {
          ...this.state.xDueDate,
          years: oTime.years,
          months: oTime.months,
          date: oTime.date,
        },
      },
    );
  }

  handleChangeDuetime(
    myMoment,
  ) {
    const oTime = myMoment.toObject(
    );

    if (
      moment(
      ).isSameOrAfter(
        myMoment,
      )
    ) {
      return;
    }

    this.setState(
      {
        xDueDate: {
          ...this.state.xDueDate,
          hours: oTime.hours,
          minutes: oTime.minutes,
          seconds: oTime.seconds,
        },
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
      xDueDate,
      description,
    } = this.state;

    return (
      <Grid
        container
        className={classes.root}
      >
        <Grid
          item
          xs={10}
        >
          <FormControl
            style={{
              width: '100%',
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
          xs={10}
        >
          <FormControl
            style={{
              width: '100%',
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
          xs={10}
        >
          <DatePicker
            fullWidth
            disablePast
            keyboard
            clearable={false}
            value={
              moment(
                xDueDate,
              ).toDate(
              )
            }
            onChange={this.handleChangeDuedate}
            animateYearScrolling={false}
          />
        </Grid>

        <Grid
          item
          xs={10}
        >
          <TimePicker
            fullWidth
            disablePast
            keyboard
            clearable={false}
            value={
              moment(
                xDueDate,
              ).toDate(
              )
            }
            mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
            placeholder="08:00 AM"
            onChange={this.handleChangeDuetime}
          />
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
                {
                  ...this.state,
                  dueDate: moment(
                    this.state.xDueDate,
                  ).toDate(
                  ),
                },
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
