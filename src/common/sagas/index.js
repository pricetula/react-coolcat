import {
  watchCounter,
} from './counter';
import {
  watchCounterHistory,
} from './counterHistory';
import {
  watchUser,
} from './user';
import {
  watchNotifier,
} from './notifier';
import {
  watchTodo,
} from './todo';
import {
  watchCookie,
} from './cookie';

export default function* rootSaga(
) {
  yield [
    watchCounterHistory(
    ),
    watchCounter(
    ),
    watchUser(
    ),
    watchNotifier(
    ),
    watchTodo(
    ),
    watchCookie(
    ),
  ];
}
