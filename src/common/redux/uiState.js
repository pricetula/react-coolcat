export const initState = {
  stateLdrawerOpen: false,
  stateSigninSignupOpen: false,
};

export function actionUiState(
  type,
) {
  return {
    type,
  };
}

export function reducerUIState(
  state = initState,
  action,
) {
  switch (action.type) {
    case 'STATE_LDRAWER_OPEN':
      return {
        ...state,
        stateLdrawerOpen: !state.stateLdrawerOpen,
      };

    case 'STATE_SIGNINSIGNUP_OPEN':
      return {
        ...state,
        stateSigninSignupOpen: action.payload,
      };

    default:
      return state;
  }
}
