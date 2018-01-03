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
  ];
}
