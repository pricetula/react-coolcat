import { combineReducers } from 'redux';
import { reducerCounter } from './counter';
import { reducerNotifier } from './notifier';

export default combineReducers(
  {
    reducerCounter,
    reducerNotifier,
  },
);
