export const initState = {
  todos: [],
  showPriority: false,
  showHidden: false,
  showFinished: false,
  showIncomplete: false,
  showRecentFirst: true,
};

export function actionUpdateTodosIncomplete(
) {
  return {
    type: 'TODO_UPDATE_INCOMPLETE_REQUEST',
  };
}

export function actionGetTodos(
) {
  return {
    type: 'TODO_GET_ALL_REQUEST',
  };
}

export function actionDeleteTodos(
) {
  return {
    type: 'TODO_DELETE_ALL_REQUEST',
  };
}

export function actionAddTodo(
  payload,
) {
  return {
    payload,
    type: 'TODO_ADD_REQUEST',
  };
}

export function actionUpdateTodoFinished(
  payload,
) {
  return {
    payload,
    type: 'TODO_UPDATE_FINISHED_REQUEST',
  };
}

export function actionUpdateTodoHide(
  payload,
) {
  return {
    payload,
    type: 'TODO_UPDATE_HIDE_REQUEST',
  };
}

export function actionUpdateTodoPriority(
  payload,
) {
  return {
    payload,
    type: 'TODO_UPDATE_PRIORITY_REQUEST',
  };
}

export function actionGetTodo(
  payload,
) {
  return {
    payload,
    type: 'TODO_GET_REQUEST',
  };
}

export function actionDeleteTodo(
  payload,
) {
  return {
    payload,
    type: 'TODO_DELETE_REQUEST',
  };
}

export function actionShowTodo(
  type,
) {
  return {
    type,
  };
}

export function reducerTodo(
  state = initState,
  action,
) {
  switch (action.type) {
    case 'TODO_ADD_OK':
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ],
      };

    case 'TODO_SHOWRECENT_OK':
      return {
        ...state,
        showRecentFirst: !state.showRecentFirst,
      };

    case 'TODO_SHOWINCOMPLETE_OK':
      return {
        ...state,
        showIncomplete: !state.showIncomplete,
      };

    case 'TODO_SHOWFINISHED_OK':
      return {
        ...state,
        showFinished: !state.showFinished,
      };

    case 'TODO_SHOWHIDDEN_OK':
      return {
        ...state,
        showHidden: !state.showHidden,
      };

    case 'TODO_SHOWPRIORITY_OK':
      return {
        ...state,
        showPriority: action.payload,
      };

    default:
      return state;
  }
}
