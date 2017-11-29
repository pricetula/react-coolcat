import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware, {
  END,
} from 'redux-saga';
import combinedSagas from '../sagas';
import reducers from './reducers';

export default function (
  preLoadedState,
) {
  const sagaMiddleware = createSagaMiddleware(
  );

  const store = createStore(
    reducers,

    preLoadedState,

    compose(
      applyMiddleware(
        sagaMiddleware,
      ),
    ),
  );

  sagaMiddleware.run(
    combinedSagas,
  );

  store.runSaga = sagaMiddleware.run;

  store.close = (
  ) => store.dispatch(
    END,
  );

  return store;
}
