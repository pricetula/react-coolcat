import {
  createStore,
} from 'redux';
import reducers from './reducers';

let preLoadedState = {};

if (
  typeof (typeof window) === 'undefined'
) {
  preLoadedState = window.__PRELOADEDSTATE__;

  delete window.__PRELOADEDSTATE__;
}

export default createStore(
  reducers,
  preLoadedState,
);
