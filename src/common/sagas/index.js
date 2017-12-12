import {
  watchCounter,
} from './counter';
import {
  watchCounterHistory,
} from './counterHistory';

export default function* rootSaga(
) {
  yield [
    watchCounterHistory(
    ),
    watchCounter(
    ),
  ];
}
