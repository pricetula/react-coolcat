import React, {
  Component,
} from 'react';
import {
  sortBy,
} from 'lodash/collection';
import moment from 'moment';
import PropTypes from 'prop-types';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';

export const styles = theme => (
  {
    root: {
      width: '100%',
      maxWidth: 400,
      background: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
    },
  }
);

class MComponent extends Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.reRender = this.reRender.bind(
      this,
    );

    this.state = {
      rerender: true,
    };

    this.timerId = null;
  }

  componentWillReceiveProps(
    nProps,
  ) {
    const {
      counterHistory,
    } = nProps;

    if (
      !this.timerId &&
      counterHistory.length > 0
    ) {
      this.timerID = setInterval(
        (
        ) => this.reRender(
        ),
        60000,
      );
    }
  }

  componentWillUnmount(
  ) {
    clearInterval(
      this.timerID,
    );
  }

  reRender(
  ) {
    this.setState(
      {
        rerender: !this.state.rerender,
      },
    );
  }

  render(
  ) {
    const {
      classes,
      counterHistory,
    } = this.props;

    return (
      <List
        className={classes.root}
        subheader={
          <ListSubheader>
            Notifications
          </ListSubheader>
        }
      >
        {
          sortBy(
            counterHistory,
            history => new Date(
              history.date,
            )
            .getTime(
            ) * -1,
          ).map(
            history => (
              <ListItem key={history._id}>
                <ListItemText
                  primary={history.detail}
                  secondary={
                    moment(
                      history.date,
                    ).fromNow(
                    )
                  }
                />
              </ListItem>
            ),
          )
        }
      </List>
    );
  }
}

MComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  counterHistory: PropTypes.array.isRequired,
};

export default MComponent;
