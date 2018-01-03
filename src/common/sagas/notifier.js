import {
  delay,
} from 'redux-saga';
import {
  put,
  takeLatest,
} from 'redux-saga/effects';

export function* handleNotifyAndClear(
  action,
) {
  yield put(
    {
      type: 'NOTIFY_OK',
      payload: action.payload.message || 'Empty Message',
    },
  );

  yield delay(
    action.payload.delayTime || 1000,
  );

  yield put(
    {
      type: 'NOTIFY_RESET',
    },
  );
}

export function* watchNotifier(
) {
  yield takeLatest(
    'NOTIFY_CLEAR_REQUEST',
    handleNotifyAndClear,
  );
}
