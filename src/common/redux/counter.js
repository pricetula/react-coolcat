export function actionIncreaseCount(
) {
  return {
    type: 'COUNTER_INCREASE_REQUEST',
  };
}

export function actionDecreaseCount(
) {
  return {
    type: 'COUNTER_DECREASE_REQUEST',
  };
}

export function actionResetCount(
) {
  return {
    type: 'COUNTER_RESET_REQUEST',
  };
}

export function reducerCounter(
  state = 0,
  action,
) {
  switch (action.type) {
    case 'COUNTER_INCREASE_OK':
      return state + 1;

    case 'COUNTER_DECREASE_OK':
      return state - 1;

    case 'COUNTER_RESET_OK':
      return 0;

    default:
      return state;
  }
}
