import {
  put,
  take,
  fork,
  cancel,
} from 'redux-saga/effects';
import Cookies from 'universal-cookie';

const cookies = new Cookies(
);

export const cookieName = 'authToken';

export function* handleGetCookie(
) {
  while (
    yield take(
      'COOKIE_GET_REQUEST',
    )
  ) {
    yield put(
      {
        payload: cookies.get(
          cookieName,
        ),
        type: 'COOKIE_GET_OK',
      },
    );
  }
}

export function* handleSetCookie(
) {
  while (true) {
    const action = yield take(
      'COOKIE_SET_REQUEST',
    );

    cookies.set(
      cookieName,
      action.payload,
    );

    yield put(
      {
        payload: cookies.get(
          cookieName,
        ),
        type: 'COOKIE_SET_OK',
      },
    );
  }
}

export function* handleSetRemoveCookie(
) {
  const setCookieTask = yield fork(
    handleSetCookie,
  );

  yield take(
    'COOKIE_REMOVE_REQUEST',
  );

  yield cancel(
    setCookieTask,
  );

  cookies.remove(
    cookieName,
  );

  yield put(
    {
      type: 'COOKIE_REMOVE_OK',
    },
  );
}

export function* watchCookie(
) {
  yield [
    handleGetCookie(
    ),
    handleSetRemoveCookie(
    ),
  ];
}
