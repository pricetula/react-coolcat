export function actionNotify(
  payload,
) {
  return {
    payload,
    type: 'COUNTER_MESSAGE_REQUEST',
  };
}

export function reducerNotifier(
  state = '',
  action,
) {
  switch (action.type) {
    case 'COUNTER_MESSAGE_OK':
      return action.payload;

    case 'COUNTER_MESSAGE_RESET':
      return '';

    default:
      return state;
  }
}
