/* eslint-env mocha */
import {
  assert,
} from 'chai';
import {
  actionUiState,
  reducerUIState,
  initState,
} from './uiState';

describe(
  'Redux: UI State',
  (
  ) => {
    it(
      'Initial State',
      (
      ) => {
        assert.isObject(
          initState,
        );
        assert.deepEqual(
          initState,
          {
            stateLdrawerOpen: false,
            stateSigninSignupOpen: false,
          },
        );
      },
    );

    it(
      'Actions',
      (
      ) => {
        assert.isObject(
          actionUiState(
            'REDUX_TYPE',
          ),
          'Action ui state didn\'t return object',
        );
        assert.deepEqual(
          actionUiState(
            'REDUX_TYPE',
          ),
          {
            type: 'REDUX_TYPE',
          },
          'Action ui state didn\'t return correct type and payload',
        );
      },
    );

    it(
      'Reducer',
      (
      ) => {
        assert.deepEqual(
          reducerUIState(
            initState,
            {
              type: 'STATE_LDRAWER_OPEN',
            },
          ),
          {
            ...initState,
            stateLdrawerOpen: !initState.stateLdrawerOpen,
          },
          'STATE_LDRAWER_OPEN',
        );

        assert.deepEqual(
          reducerUIState(
            initState,
            {
              payload: true,
              type: 'STATE_SIGNINSIGNUP_OPEN',
            },
          ),
          {
            ...initState,
            stateSigninSignupOpen: true,
          },
          'STATE_SIGNINSIGNUP_OPEN',
        );
      },
    );
  },
);
