import randomstring from 'randomstring';
import {
  delay,
} from 'redux-saga';
import {
  put,
  takeLatest,
} from 'redux-saga/effects';

export function* handleAddCounterHistory(
  action,
) {
  yield delay(
    1000,
  );

  yield put(
    {
      type: 'COUNTERHISTORY_ADD_OK',
      payload: {
        _id: randomstring.generate(
          3,
        ),
        date: new Date(
        ),
        detail: `Counter ${action.payload.type}`,
      },
    },
  );
}

export function* watchCounterHistory(
) {
  yield [
    takeLatest(
      'COUNTERHISTORY_ADD_REQUEST',
      handleAddCounterHistory,
    ),
  ];
}
