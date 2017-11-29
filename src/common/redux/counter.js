export function actionIncreaseCount(
) {
  return {
    type: 'COUNTER_INCREASE',
  };
}

export function actionDecreaseCount(
) {
  return {
    type: 'COUNTER_DECREASE',
  };
}

export function actionResetCount(
) {
  return {
    type: 'COUNTER_RESET',
  };
}

export function reducerCounter(
  state = 0,
  action,
) {
  switch (action.type) {
    case 'COUNTER_INCREASE':
      return state + 1;

    case 'COUNTER_DECREASE':
      return state - 1;

    case 'COUNTER_RESET':
      return 0;

    default:
      return state;
  }
}
