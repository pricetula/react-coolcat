export function actionUiState(
  type,
) {
  return {
    type,
  };
}

export function reducerUIState(
  state = {
    stateLdrawerOpen: false,
  },
  action,
) {
  switch (action.type) {
    case 'STATE_LDRAWER_OPEN':
      return {
        ...state,
        stateLdrawerOpen: !state.stateLdrawerOpen,
      };

    default:
      return state;
  }
}
