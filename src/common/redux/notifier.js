export const initState = {
  notification: '',
  error: false,
  warning: false,
  loading: false,
};

export function actionNotify(
  payload,
) {
  return {
    payload,
    type: 'NOTIFY_REQUEST',
  };
}

export function actionNotifyAndClear(
  payload,
) {
  return {
    payload,
    type: 'NOTIFY_CLEAR_REQUEST',
  };
}

export function actionNotifyError(
  payload,
) {
  return {
    payload,
    type: 'NOTIFY_ERROR_REQUEST',
  };
}

export function actionNotifyAndClearError(
  payload,
) {
  return {
    payload,
    type: 'NOTIFY_CLEAR_ERROR_REQUEST',
  };
}

export function actionNotifyWarning(
  payload,
) {
  return {
    payload,
    type: 'NOTIFY_WARNING_REQUEST',
  };
}

export function actionNotifyAndClearWarning(
  payload,
) {
  return {
    payload,
    type: 'NOTIFY_CLEAR_WARNING_REQUEST',
  };
}

export function actionNotifyLoader(
  payload,
) {
  return {
    payload,
    type: 'NOTIFY_LOADER_REQUEST',
  };
}

export function reducerNotifier(
  state = initState,
  action,
) {
  switch (action.type) {
    case 'NOTIFY_OK':
      return {
        notification: action.payload,
        warning: false,
        error: false,
        loading: false,
      };

    case 'NOTIFY_RESET':
      return {
        notification: '',
        warning: false,
        error: false,
        loading: false,
      };

    case 'NOTIFY_ERROR_OK':
      return {
        notification: action.payload,
        warning: false,
        error: true,
        loading: false,
      };

    case 'NOTIFY_WARNING_OK':
      return {
        notification: action.payload,
        warning: true,
        error: false,
        loading: false,
      };

    case 'NOTIFY_LOADER_OK':
      return {
        notification: action.payload,
        warning: false,
        error: false,
        loading: true,
      };

    default:
      return state;
  }
}
