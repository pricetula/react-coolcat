import {
  delay,
} from 'redux-saga';
import {
  put,
  fork,
  call,
  take,
} from 'redux-saga/effects';
import {
  has,
} from 'lodash/object';
import randomstring from 'randomstring';
import {
  postAddTodo,
} from '../api/post/todo';

export function* handleAddLocalTodo(
  todo,
) {
  yield put(
    {
      payload: {
        ...todo,
        storedRemotely: has(
          todo,
          'owner',
        ),
      },
      type: 'TODO_ADD_OK',
    },
  );
}

export function* handleAddTodo(
) {
  while (
    true
  ) {
    const action = yield take(
      'TODO_ADD_REQUEST',
    );

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

      const startDate = new Date(
      );

      const localId = randomstring.generate(
        5,
      );

      yield fork(
        handleAddLocalTodo,
        {
          localId,
          startDate,
          dueDate: action.payload.dueDate,
          details: {
            item: action.payload.item,
            description: action.payload.description,
          },
          status: {
            priority: 0,
            hide: false,
            incomplete: false,
            finished: false,
          },
        },
      );

      const apiResponse = yield call(
        postAddTodo,
        {
          ...action.payload,
          startDate,
          localId,
        },
        cookieAction.payload,
      );

      yield call(
        delay,
        1000,
      );

      if (apiResponse.data.todo) {
        yield put(
          {
            type: 'TODO_STOREDREMOTELY_OK',
            payload: apiResponse.data.todo,
          },
        );
      }

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
}

export function* watchTodo(
) {
  yield [
    fork(
      handleAddTodo,
    ),
  ];
}
