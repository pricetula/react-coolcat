import {
  delay,
} from 'redux-saga';
import {
  put,
  takeLatest,
  call,
  take,
} from 'redux-saga/effects';
import {
  postUserSignup,
  postUserSignin,
} from '../api/post/user';
import {
  getUserData,
} from '../api/get/user';

export function* handleSignout(
) {
  yield put(
    {
      type: 'COOKIE_REMOVE_REQUEST',
    },
  );

  yield take(
    'COOKIE_REMOVE_OK',
  );

  yield put(
    {
      type: 'USER_SIGNOUT_OK',
    },
  );

  yield put(
    {
      type: 'STATE_SIGNINSIGNUP_OPEN',
      payload: true,
    },
  );
}

export function* handleGetUserData(
) {
  try {
    yield put(
      {
        type: 'COOKIE_GET_REQUEST',
      },
    );

    const action = yield take(
      'COOKIE_GET_OK',
    );

    if (action.payload) {
      const apiResponse = yield call(
        getUserData,
        action.payload,
      );

      yield put(
        {
          type: 'USER_DATA_OK',
          payload: apiResponse.data,
        },
      );
    } else {
      yield put(
        {
          type: 'STATE_SIGNINSIGNUP_OPEN',
          payload: true,
        },
      );
    }
  } catch (err) {
    if (err.response.status === 401) {
      yield put(
        {
          type: 'USER_SIGNOUT_REQUEST',
        },
      );
    }

    yield put(
      {
        type: 'NOTIFY_CLEAR_REQUEST',
        payload: {
          message: err.response.data.message ||
            err.message ||
            'Failed To Signin',
          delayTime: 4000,
        },
      },
    );
  }
}

export function* handleSignin(
  action,
) {
  try {
    yield put(
      {
        type: 'NOTIFY_LOADER_OK',
        payload: 'Signing In',
      },
    );

    const apiResponse = yield call(
      postUserSignin,
      action.payload,
    );

    yield put(
      {
        type: 'COOKIE_SET_REQUEST',
        payload: apiResponse.data.token,
      },
    );

    yield take(
      'COOKIE_SET_OK',
    );

    yield put(
      {
        type: 'USER_DATA_OK',
        payload: apiResponse.data,
      },
    );

    yield put(
      {
        type: 'STATE_SIGNINSIGNUP_OPEN',
        payload: false,
      },
    );

    yield delay(
      1000,
    );

    yield put(
      {
        type: 'NOTIFY_RESET',
      },
    );
  } catch (err) {
    yield put(
      {
        type: 'NOTIFY_CLEAR_REQUEST',
        payload: {
          message: err.response.data.message ||
            err.message ||
            'Failed To Signin',
          delayTime: 4000,
        },
      },
    );
  }
}

export function* handleSignup(
  action,
) {
  try {
    yield put(
      {
        type: 'NOTIFY_LOADER_OK',
        payload: 'Creating Account',
      },
    );

    const apiResponse = yield call(
      postUserSignup,
      action.payload,
    );

    yield put(
      {
        type: 'USER_TOKEN_OK',
        payload: apiResponse.data.token,
      },
    );

    yield delay(
      1000,
    );

    yield put(
      {
        type: 'NOTIFY_RESET',
      },
    );
  } catch (err) {
    yield put(
      {
        type: 'NOTIFY_CLEAR_REQUEST',
        payload: {
          message: err.response.data.message ||
            err.message ||
            'Failed To Create Account',
          delayTime: 4000,
        },
      },
    );
  }
}

export function* watchUser(
) {
  yield [
    takeLatest(
      'USER_SIGNUP_REQUEST',
      handleSignup,
    ),
    takeLatest(
      'USER_SIGNIN_REQUEST',
      handleSignin,
    ),
    takeLatest(
      'USER_SIGNOUT_REQUEST',
      handleSignout,
    ),
    takeLatest(
      'USER_DATA_REQUEST',
      handleGetUserData,
    ),
  ];
}
