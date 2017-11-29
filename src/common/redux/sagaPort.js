import {
  createStore,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedSagas from '../sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware(
);

const store = createStore(
  reducers,

  applyMiddleware(
    sagaMiddleware,
  ),
);

sagaMiddleware.run(
  combinedSagas,
);

export default store;
