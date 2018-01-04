import React, {
  Component,
} from 'react';
import {
  isEqual,
} from 'lodash/lang';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  actionIncreaseCount,
  actionDecreaseCount,
  actionResetCount,
} from './counter';
import {
  actionNotify,
  actionNotifyAndClear,
  actionNotifyError,
  actionNotifyAndClearError,
  actionNotifyWarning,
  actionNotifyAndClearWarning,
  actionNotifyLoader,
} from './notifier';
import {
  actionUiState,
} from './uiState';
import {
  actionSignup,
  actionSignin,
  actionGetUser,
  actionSignout,
} from './user';
import {
  actionAddCounterHistory,
  actionResetCounterHistory,
} from './counterHistory';
import {
  actionShowTodo,
  actionAddTodo,
  actionDeleteTodo,
  actionDeleteTodos,
  actionGetTodo,
  actionGetTodos,
  actionUpdateTodoPriority,
  actionUpdateTodoHide,
  actionUpdateTodoFinished,
  actionUpdateTodosIncomplete,
} from './todo';

export default function (
  RootComponent,
) {
  class Container extends Component {
    shouldComponentUpdate(
      nProps,
    ) {
      const {
        counter,
        notification: {
          notification,
          error,
          warning,
          loading,
        },
        todo: {
          todos,
          showPriority,
          showHidden,
          showFinished,
          showIncomplete,
          showRecentFirst,
        },
        uiState,
        counterHistory,
        user,
      } = this.props;

      return (
        nProps.user.token !== user.token ||
        nProps.user.info !== user.info ||
        nProps.counter !== counter ||
        nProps.notification.notification !== notification ||
        nProps.notification.error !== error ||
        nProps.notification.warning !== warning ||
        nProps.notification.loading !== loading ||
        !isEqual(
          nProps.uiState,
          uiState,
        ) ||
        nProps.todo.todos.length !== todos.length ||
        nProps.todo.showPriority !== showPriority ||
        nProps.todo.showHidden !== showHidden ||
        nProps.todo.showFinished !== showFinished ||
        nProps.todo.showIncomplete !== showIncomplete ||
        nProps.todo.showRecentFirst !== showRecentFirst ||
        counterHistory.length !== nProps.counterHistory.length
      );
    }

    render(
    ) {
      return (
        <RootComponent
          {...this.props}
        />
      );
    }
  }


  Container.propTypes = {
    counter: PropTypes.number.isRequired,
    counterHistory: PropTypes.array.isRequired,
    notification: PropTypes.shape(
      {
        notification: PropTypes.string.isRequired,
        error: PropTypes.bool.isRequired,
        warning: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired,
      },
    ).isRequired,
    uiState: PropTypes.shape(
      {
        stateLdrawerOpen: PropTypes.bool.isRequired,
        stateSigninSignupOpen: PropTypes.bool.isRequired,
      },
    ).isRequired,
    todo: PropTypes.shape(
      {
        todos: PropTypes.array.isRequired,
        showPriority: PropTypes.number.isRequired,
        showHidden: PropTypes.bool.isRequired,
        showFinished: PropTypes.bool.isRequired,
        showIncomplete: PropTypes.bool.isRequired,
        showRecentFirst: PropTypes.bool.isRequired,
      },
    ).isRequired,
    user: PropTypes.object.isRequired,
    actionIncreaseCount: PropTypes.func.isRequired,
    actionDecreaseCount: PropTypes.func.isRequired,
    actionResetCount: PropTypes.func.isRequired,
    actionNotify: PropTypes.func.isRequired,
    actionNotifyAndClear: PropTypes.func.isRequired,
    actionNotifyError: PropTypes.func.isRequired,
    actionNotifyAndClearError: PropTypes.func.isRequired,
    actionNotifyWarning: PropTypes.func.isRequired,
    actionNotifyAndClearWarning: PropTypes.func.isRequired,
    actionNotifyLoader: PropTypes.func.isRequired,
    actionUiState: PropTypes.func.isRequired,
    actionAddCounterHistory: PropTypes.func.isRequired,
    actionResetCounterHistory: PropTypes.func.isRequired,
    actionSignup: PropTypes.func.isRequired,
    actionSignin: PropTypes.func.isRequired,
    actionGetUser: PropTypes.func.isRequired,
    actionSignout: PropTypes.func.isRequired,
    actionShowTodo: PropTypes.func.isRequired,
    actionAddTodo: PropTypes.func.isRequired,
    actionDeleteTodo: PropTypes.func.isRequired,
    actionDeleteTodos: PropTypes.func.isRequired,
    actionGetTodo: PropTypes.func.isRequired,
    actionGetTodos: PropTypes.func.isRequired,
    actionUpdateTodoPriority: PropTypes.func.isRequired,
    actionUpdateTodoHide: PropTypes.func.isRequired,
    actionUpdateTodoFinished: PropTypes.func.isRequired,
    actionUpdateTodosIncomplete: PropTypes.func.isRequired,
  };

  const mapStateToProps = state => (
    {
      user: state.reducerUser,
      counter: state.reducerCounter,
      counterHistory: state.reducerCounterHistory,
      notification: state.reducerNotifier,
      uiState: state.reducerUIState,
      todo: state.reducerTodo,
    }
  );

  const mapDispatchToProps = dispatch => (
    bindActionCreators(
      {
        actionSignup,
        actionSignin,
        actionGetUser,
        actionSignout,
        actionIncreaseCount,
        actionDecreaseCount,
        actionResetCount,
        actionNotify,
        actionUiState,
        actionAddCounterHistory,
        actionResetCounterHistory,
        actionNotifyAndClear,
        actionNotifyError,
        actionNotifyAndClearError,
        actionNotifyWarning,
        actionNotifyAndClearWarning,
        actionNotifyLoader,
        actionShowTodo,
        actionAddTodo,
        actionDeleteTodo,
        actionDeleteTodos,
        actionGetTodo,
        actionGetTodos,
        actionUpdateTodoPriority,
        actionUpdateTodoHide,
        actionUpdateTodoFinished,
        actionUpdateTodosIncomplete,
      },
      dispatch,
    )
  );

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    Container,
  );
}
