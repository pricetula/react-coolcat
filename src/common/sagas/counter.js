import {
  delay,
} from 'redux-saga';
import {
  put,
  takeLatest,
  call,
} from 'redux-saga/effects';

function* handleCounter(
  message,
  delayTime,
  counterType,
) {
  yield put(
    {
      type: 'COUNTER_MESSAGE_OK',
      payload: message,
    },
  );

  yield delay(
    delayTime,
  );

  yield put(
    {
      type: counterType,
    },
  );

  yield put(
    {
      type: 'COUNTER_MESSAGE_RESET',
    },
  );
}

export function* handleIncreaseCounter(
) {
  yield call(
    handleCounter,
    'Increasing The Count Value',
    1000,
    'COUNTER_INCREASE_OK',
  );
}

export function* handleDecreaseCounter(
) {
  yield call(
    handleCounter,
    'Decreasing The Count Value',
    2000,
    'COUNTER_DECREASE_OK',
  );
}

export function* handleResetCounter(
) {
  yield call(
    handleCounter,
    'Reseting The Count Value',
    1500,
    'COUNTER_RESET_OK',
  );
}

export function* watchCounter(
) {
  yield [
    takeLatest(
      'COUNTER_INCREASE_REQUEST',
      handleIncreaseCounter,
    ),
    takeLatest(
      'COUNTER_DECREASE_REQUEST',
      handleDecreaseCounter,
    ),
    takeLatest(
      'COUNTER_RESET_REQUEST',
      handleResetCounter,
    ),
  ];
}
