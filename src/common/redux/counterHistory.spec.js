/* eslint-env mocha */
import {
  assert,
} from 'chai';
import faker from 'faker';
import {
  actionAddCounterHistory,
  actionResetCounterHistory,
  reducerCounterHistory,
  initState,
} from './counterHistory';

describe(
  'Redux: Counter History',
  (
  ) => {
    it(
      'Initial State',
      (
      ) => {
        assert.isArray(
          initState,
        );
        assert.lengthOf(
          initState,
          0,
        );
      },
    );

    it(
      'Actions',
      (
      ) => {
        const payload = {
          detail: faker.lorem.paragraph(
          ),
        };
        assert.isObject(
          actionAddCounterHistory(
          ),
          'Action add counter history didn\'t return object',
        );
        assert.deepEqual(
          actionAddCounterHistory(
            payload,
          ),
          {
            payload,
            type: 'COUNTERHISTORY_ADD_REQUEST',
          },
          'Action add counter history didn\'t return correct type',
        );
        assert.isObject(
          actionResetCounterHistory(
          ),
          'Action reset counter history didn\'t return object',
        );
        assert.deepEqual(
          actionResetCounterHistory(
          ),
          {
            type: 'COUNTERHISTORY_RESET_REQUEST',
          },
          'Action reset counter history didn\'t return correct type',
        );
      },
    );

    it(
      'Reducer',
      (
      ) => {
        assert.lengthOf(
          reducerCounterHistory(
            initState,
            {
              payload: {
                detail: faker.lorem.paragraph(
                ),
              },
              type: 'COUNTERHISTORY_ADD_OK',
            },
          ),
          1,
          'Reducer counter history returned incorrect state length',
        );
        assert.lengthOf(
          reducerCounterHistory(
            [
              {
                detail: faker.lorem.paragraph,
              },
            ],
            {
              type: 'COUNTERHISTORY_RESET_OK',
            },
          ),
          0,
          'Reducer counter returned incorrect state after decrease',
        );
      },
    );
  },
);
