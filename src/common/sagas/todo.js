import {
  put,
  takeLatest,
  call,
  take,
} from 'redux-saga/effects';
import {
  postAddTodo,
} from '../api/post/todo';

export function* handleAddTodo(
  action,
) {
  try {
    yield put(
      {
        type: 'NOTIFY_LOADER_OK',
        payload: `Adding ${action.payload.item}`,
      },
    );

    yield put(
      {
        type: 'COOKIE_GET_REQUEST',
      },
    );

    const cookieAction = yield take(
      'COOKIE_GET_OK',
    );

    if (cookieAction.payload) {
      const apiResponse = yield call(
        postAddTodo,
        action.payload,
        cookieAction.payload,
      );

      if (!apiResponse.data.error) {
        yield put(
          {
            type: 'NOTIFY_CLEAR_REQUEST',
            payload: {
              message: apiResponse.data.message,
              delayTime: 2000,
            },
          },
        );
      }
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

export function* watchTodo(
) {
  yield [
    takeLatest(
      'TODO_ADD_REQUEST',
      handleAddTodo,
    ),
  ];
}
