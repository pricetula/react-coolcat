/* eslint-env mocha */
import {
  assert,
} from 'chai';
import {
  actionIncreaseCount,
  actionDecreaseCount,
  actionResetCount,
  reducerCounter,
  initState,
} from './counter';

describe(
  'Redux: Counter',
  (
  ) => {
    it(
      'Works correctly',
      (
      ) => {
        assert.strictEqual(
          initState,
          0,
          'Initial state is not correct',
        );
        assert.isObject(
          actionIncreaseCount(
          ),
          'Action increase count didn\'t return object',
        );
        assert.deepEqual(
          actionIncreaseCount(
          ),
          {
            type: 'COUNTER_INCREASE_REQUEST',
          },
          'Action increase count didn\'t return correct type',
        );
        assert.isObject(
          actionDecreaseCount(
          ),
          'Action increase count didn\'t return object',
        );
        assert.deepEqual(
          actionDecreaseCount(
          ),
          {
            type: 'COUNTER_DECREASE_REQUEST',
          },
          'Action increase count didn\'t return correct type',
        );
        assert.isObject(
          actionResetCount(
          ),
          'Action increase count didn\'t return object',
        );
        assert.deepEqual(
          actionResetCount(
          ),
          {
            type: 'COUNTER_RESET_REQUEST',
          },
          'Action increase count didn\'t return correct type',
        );
        assert.strictEqual(
          reducerCounter(
            initState,
            {
              type: 'COUNTER_INCREASE_OK',
            },
          ),
          1,
          'Reducer counter returned incorrect state after increase',
        );
        assert.strictEqual(
          reducerCounter(
            initState,
            {
              type: 'COUNTER_DECREASE_OK',
            },
          ),
          -1,
          'Reducer counter returned incorrect state after decrease',
        );
        assert.strictEqual(
          reducerCounter(
            initState,
            {
              type: 'COUNTER_RESET_OK',
            },
          ),
          0,
          'Reducer counter returned incorrect state after reset',
        );
      },
    );
  },
);
