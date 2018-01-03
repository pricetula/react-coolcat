/* eslint-env mocha */
import {
  assert,
} from 'chai';
import faker from 'faker';
import {
  actionNotify,
  actionNotifyAndClear,
  actionNotifyError,
  actionNotifyAndClearError,
  actionNotifyWarning,
  actionNotifyAndClearWarning,
  actionNotifyLoader,
  reducerNotifier,
  initState,
} from '../../src/common/redux/notifier';

describe(
  'Redux: Notifier',
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
            notification: '',
            error: false,
            warning: false,
            loading: false,
          },
        );
      },
    );

    it(
      'Actions',
      (
      ) => {
        const payload = faker.lorem.paragraph(
        );

        assert.isObject(
          actionNotifyLoader(
            payload,
          ),
          'Action notify loader didn\'t return object',
        );
        assert.deepEqual(
          actionNotifyLoader(
            payload,
          ),
          {
            payload,
            type: 'NOTIFY_LOADER_REQUEST',
          },
          'Action notify loader didn\'t return correct type and payload',
        );

        assert.isObject(
          actionNotify(
            payload,
          ),
          'Action notify didn\'t return object',
        );
        assert.deepEqual(
          actionNotify(
            payload,
          ),
          {
            payload,
            type: 'NOTIFY_REQUEST',
          },
          'Action notify didn\'t return correct type and payload',
        );

        assert.isObject(
          actionNotifyAndClear(
            payload,
          ),
          'Action notify and clear didn\'t return object',
        );
        assert.deepEqual(
          actionNotifyAndClear(
            payload,
          ),
          {
            payload,
            type: 'NOTIFY_CLEAR_REQUEST',
          },
          'Action notify and clear didn\'t return correct type and payload',
        );

        assert.isObject(
          actionNotifyError(
            payload,
          ),
          'Action notify error didn\'t return object',
        );
        assert.deepEqual(
          actionNotifyError(
            payload,
          ),
          {
            payload,
            type: 'NOTIFY_ERROR_REQUEST',
          },
          'Action notify error didn\'t return correct type and payload',
        );

        assert.isObject(
          actionNotifyAndClearError(
            payload,
          ),
          'Action notify and clear error didn\'t return object',
        );
        assert.deepEqual(
          actionNotifyAndClearError(
            payload,
          ),
          {
            payload,
            type: 'NOTIFY_CLEAR_ERROR_REQUEST',
          },
          'Action notify and clear error didn\'t return correct type and payload',
        );

        assert.isObject(
          actionNotifyWarning(
            payload,
          ),
          'Action notify warning didn\'t return object',
        );
        assert.deepEqual(
          actionNotifyWarning(
            payload,
          ),
          {
            payload,
            type: 'NOTIFY_WARNING_REQUEST',
          },
          'Action notify warning didn\'t return correct type and payload',
        );

        assert.isObject(
          actionNotifyAndClearWarning(
            payload,
          ),
          'Action notify and clear warning didn\'t return object',
        );
        assert.deepEqual(
          actionNotifyAndClearWarning(
            payload,
          ),
          {
            payload,
            type: 'NOTIFY_CLEAR_WARNING_REQUEST',
          },
          'Action notify and clear warning didn\'t return correct type and payload',
        );
      },
    );

    it(
      'Reducer',
      (
      ) => {
        const payload = faker.lorem.word(
        );

        assert.deepEqual(
          reducerNotifier(
            initState,
            {
              payload,
              type: 'NOTIFY_OK',
            },
          ),
          {
            ...initState,
            notification: payload,
          },
          'NOTIFY_OK',
        );

        assert.deepEqual(
          reducerNotifier(
            initState,
            {
              payload,
              type: 'NOTIFY_ERROR_OK',
            },
          ),
          {
            ...initState,
            notification: payload,
            error: true,
          },
          'NOTIFY_ERROR_OK',
        );

        assert.deepEqual(
          reducerNotifier(
            initState,
            {
              payload,
              type: 'NOTIFY_WARNING_OK',
            },
          ),
          {
            ...initState,
            notification: payload,
            warning: true,
          },
          'NOTIFY_WARNING_OK',
        );

        assert.deepEqual(
          reducerNotifier(
            initState,
            {
              payload,
              type: 'NOTIFY_LOADER_OK',
            },
          ),
          {
            ...initState,
            notification: payload,
            loading: true,
          },
          'NOTIFY_LOADER_OK',
        );

        assert.deepEqual(
          reducerNotifier(
            {
              notification: payload,
              warning: true,
              error: true,
              loading: true,
            },
            {
              payload,
              type: 'NOTIFY_RESET',
            },
          ),
          initState,
          'NOTIFY_RESET',
        );
      },
    );
  },
);
