import {
  watchCounter,
} from './watchCounter';

export default function* rootSaga(
) {
  yield [
    watchCounter(
    ),
  ];
}
