import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import {
  sortBy,
  filter,
} from 'lodash/collection';
import {
  isEqual,
} from 'lodash/lang';
import {
  differenceWith,
} from 'lodash/array';
import ComponentTodoItem from '../Item';

export const styles = (
) => ({
  root: {
    flexGrow: 1,
  },
});

class Mycomponent extends Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.getTodos = this.getTodos.bind(
      this,
    );
  }

  shouldComponentUpdate(
    nProps,
  ) {
    const {
      todo: {
        todos,
        showHighPriority,
        showHidden,
        showFinished,
        showIncomplete,
        showRecentFirst,
      },
    } = this.props;

    return (
      (
        nProps.todo.todos.length > 0 && differenceWith(
          nProps.todo.todos,
          todos,
          isEqual,
        ).length > 0
      ) ||
      nProps.todo.showHighPriority !== showHighPriority ||
      nProps.todo.showHidden !== showHidden ||
      nProps.todo.showFinished !== showFinished ||
      nProps.todo.showIncomplete !== showIncomplete ||
      nProps.todo.showRecentFirst !== showRecentFirst
    );
  }

  getTodos(
  ) {
    const {
      todo: {
        todos,
        showHighPriority,
        showHidden,
        showFinished,
        showIncomplete,
        showRecentFirst,
      },
    } = this.props;

    if (showHidden) {
      return filter(
        todos,
        todo => todo.status.hide === true,
      );
    } else if (showFinished) {
      return filter(
        todos,
        todo => todo.status.finished === true,
      );
    } else if (showIncomplete) {
      return filter(
        todos,
        todo => todo.status.incomplete === true,
      );
    } else if (showRecentFirst) {
      return sortBy(
        todos,
        'startDate',
      ).reverse(
      );
    } else if (showHighPriority) {
      return todos.sort(
        (
          a,
          b,
        ) => b.status.priority - a.status.priority,
      );
    }

    return todos;
  }

  render(
  ) {
    const {
      classes,
    } = this.props;

    const todos = this.getTodos(
    );

    return (
      <Grid
        container
        className={classes.root}
      >
        {
          todos.length > 0
            ? todos.map(
              todo => (
                <Grid
                  item
                  md={3}
                  sm={6}
                  xs={12}
                  key={todo.localId}
                >
                  <ComponentTodoItem
                    {...todo}
                  />
                </Grid>
              ),
            )
            : (
              <Grid
                item
                md={3}
                sm={6}
                xs={12}
              >
                Nothing to do
              </Grid>
            )
        }
      </Grid>
    );
  }
}

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
  todo: PropTypes.shape(
    {
      todos: PropTypes.array.isRequired,
      showHighPriority: PropTypes.bool.isRequired,
      showHidden: PropTypes.bool.isRequired,
      showFinished: PropTypes.bool.isRequired,
      showIncomplete: PropTypes.bool.isRequired,
      showRecentFirst: PropTypes.bool.isRequired,
    },
  ).isRequired,
};

export default Mycomponent;
