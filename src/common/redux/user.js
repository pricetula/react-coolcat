export const initState = {
  token: '',
  data: null,
};

export function actionSignup(
  payload,
) {
  return {
    payload,
    type: 'USER_SIGNUP_REQUEST',
  };
}

export function actionSignin(
  payload,
) {
  return {
    payload,
    type: 'USER_SIGNIN_REQUEST',
  };
}

export function actionGetUser(
) {
  return {
    type: 'USER_DATA_REQUEST',
  };
}

export function actionSignout(
) {
  return {
    type: 'USER_SIGNOUT_REQUEST',
  };
}

export function reducerUser(
  state = initState,
  action,
) {
  switch (action.type) {
    case 'USER_TOKEN_OK':
      return {
        ...initState,
        token: action.payload,
      };

    case 'USER_DATA_OK':
      return {
        ...initState,
        data: action.payload.data,
        token: action.payload.token,
      };

    case 'USER_SIGNOUT_OK':
      return initState;

    default:
      return state;
  }
}
