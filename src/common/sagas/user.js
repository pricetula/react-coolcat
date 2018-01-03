import {
  delay,
} from 'redux-saga';
import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import {
  postUserSignup,
  postUserSignin,
} from '../api/post/user';
import {
  getUserData,
} from '../api/get/user';

const cookies = new Cookies(
);

export function* handleUserData(
) {
  try {
    const token = cookies.get(
      'authToken',
    );

    if (token) {
      const apiResponse = yield call(
        getUserData,
        token,
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

    cookies.set(
      'authToken',
      apiResponse.data.token,
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
      'USER_DATA_REQUEST',
      handleUserData,
    ),
  ];
}
