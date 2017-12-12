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
  state = [],
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
console.log(newState);
      return newState;
    }

    default:
      return state;
  }
}
