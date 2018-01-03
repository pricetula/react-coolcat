import { combineReducers } from 'redux';
import { reducerNotifier } from './notifier';
import { reducerUIState } from './uiState';
import { reducerUser } from './user';
import { reducerCounter } from './counter';
import { reducerCounterHistory } from './counterHistory';
import { reducerTodo } from './todo';

export default combineReducers(
  {
    reducerUser,
    reducerCounter,
    reducerNotifier,
    reducerUIState,
    reducerCounterHistory,
    reducerTodo,
  },
);
