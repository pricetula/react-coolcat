/* eslint-env mocha */
import {
  assert,
} from 'chai';
import faker from 'faker';
import {
  actionSignup,
  actionSignin,
  actionGetUser,
  reducerUser,
  initState,
} from '../../src/common/redux/user';

describe(
  'Redux: User',
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
            token: '',
            data: null,
          },
        );
      },
    );

    it(
      'Actions',
      (
      ) => {
        const payload = {
          firstName: faker.name.firstName(
          ),
          lastName: faker.name.lastName(
          ),
          email: faker.internet.email(
          ),
          password: faker.internet.password(
          ),
        };
        assert.isObject(
          actionSignup(
            payload,
          ),
          'Action signup dispatched action type',
        );
        assert.deepEqual(
          actionSignup(
            payload,
          ),
          {
            payload,
            type: 'USER_SIGNUP_REQUEST',
          },
          'Action signup dispatched action',
        );

        assert.isObject(
          actionSignin(
            payload,
          ),
          'Action signin dispatched action type',
        );
        assert.deepEqual(
          actionSignin(
            payload,
          ),
          {
            payload,
            type: 'USER_SIGNIN_REQUEST',
          },
          'Action signin dispatched action',
        );

        assert.isObject(
          actionGetUser(
          ),
          'Action getuser dispatched action type',
        );
        assert.deepEqual(
          actionGetUser(
          ),
          {
            type: 'USER_DATA_REQUEST',
          },
          'Action getuser dispatched action',
        );
      },
    );

    it(
      'Reducer',
      (
      ) => {
        const payload = {
          data: {
            email: faker.internet.email(
            ),
          },
          token: faker.lorem.word(
          ),
        };

        assert.deepEqual(
          reducerUser(
            initState,
            {
              type: 'INCORRECT',
            },
          ),
          initState,
          'INCORRECT',
        );

        assert.deepEqual(
          reducerUser(
            payload,
            {
              type: 'USER_LOGOUT_OK',
            },
          ),
          initState,
          'USER_LOGOUT_OK',
        );

        assert.deepEqual(
          reducerUser(
            initState,
            {
              payload: payload.token,
              type: 'USER_TOKEN_OK',
            },
          ),
          {
            ...initState,
            token: payload.token,
          },
          'USER_TOKEN_OK',
        );

        assert.deepEqual(
          reducerUser(
            initState,
            {
              payload,
              type: 'USER_DATA_OK',
            },
          ),
          {
            ...initState,
            ...payload,
          },
          'USER_DATA_OK',
        );
      },
    );
  },
);
