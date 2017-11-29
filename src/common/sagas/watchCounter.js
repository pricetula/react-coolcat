import {
  delay,
} from 'redux-saga';
import {
  put,
  takeLatest,
} from 'redux-saga/effects';

export function* handleCounterMessage(
  action,
) {
  yield put(
    {
      type: 'COUNTER_MESSAGE_OK',
      payload: action.payload,
    },
  );

  yield delay(
    2000,
  );

  yield put(
    {
      type: 'COUNTER_MESSAGE_RESET',
    },
  );
}

export function* watchCounter(
) {
  yield [
    takeLatest(
      'COUNTER_MESSAGE_REQUEST',
      handleCounterMessage,
    ),
  ];
}
