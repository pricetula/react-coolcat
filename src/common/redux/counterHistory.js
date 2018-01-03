export const initState = [];

export function actionAddCounterHistory(
  payload,
) {
  return {
    payload,
    type: 'COUNTERHISTORY_ADD_REQUEST',
  };
}

export function actionResetCounterHistory(
) {
  return {
    type: 'COUNTERHISTORY_RESET_REQUEST',
  };
}

export function reducerCounterHistory(
  state = initState,
  action,
) {
  switch (action.type) {
    case 'COUNTERHISTORY_RESET_OK':
      return [];

    case 'COUNTERHISTORY_ADD_OK': {
      const newState = [
        ...state,
        action.payload,
      ];

      return newState;
    }

    default:
      return state;
  }
}
