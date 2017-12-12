import { combineReducers } from 'redux';
import { reducerCounter } from './counter';
import { reducerNotifier } from './notifier';
import { reducerUIState } from './uiState';
import { reducerCounterHistory } from './counterHistory';

export default combineReducers(
  {
    reducerCounter,
    reducerNotifier,
    reducerUIState,
    reducerCounterHistory,
  },
);
