/* eslint-env mocha */
import {
  assert,
} from 'chai';
import faker from 'faker';
import {
  actionShowTodo,
  actionAddTodo,
  actionDeleteTodo,
  actionDeleteTodos,
  actionGetTodo,
  actionGetTodos,
  actionUpdateTodoPriority,
  actionUpdateTodoHide,
  actionUpdateTodoFinished,
  actionUpdateTodosIncomplete,
  reducerTodo,
  initState,
} from '../../src/common/redux/todo';

describe(
  'Redux: Todo',
  (
  ) => {
    const payload = {
      item: faker.lorem.word(
      ),
      description: faker.lorem.paragraph(
      ),
    };

    it(
      'Initial State',
      (
      ) => {
        assert.isObject(
          initState,
        );

        assert.containsAllKeys(
          initState,
          [
            'todos',
            'showPriority',
            'showHidden',
            'showFinished',
            'showIncomplete',
            'showRecentFirst',
          ],
        );

        assert.isArray(
          initState.todos,
        );
        assert.lengthOf(
          initState.todos,
          0,
        );

        assert.strictEqual(
          initState.showPriority,
          0,
          'showPriority',
        );
        assert.isFalse(
          initState.showHidden,
          'showHidden',
        );
        assert.isFalse(
          initState.showFinished,
          'showFinished',
        );
        assert.isFalse(
          initState.showIncomplete,
          'showIncomplete',
        );
        assert.isTrue(
          initState.showRecentFirst,
          'showRecentFirst',
        );
      },
    );

    it(
      'Actions',
      (
      ) => {
        assert.deepEqual(
          actionUpdateTodosIncomplete(
          ),
          {
            type: 'TODO_UPDATE_INCOMPLETE_REQUEST',
          },
          'TODO_UPDATE_INCOMPLETE_REQUEST',
        );

        assert.deepEqual(
          actionUpdateTodoFinished(
            'todo.id.1',
          ),
          {
            payload: 'todo.id.1',
            type: 'TODO_UPDATE_FINISHED_REQUEST',
          },
          'TODO_UPDATE_FINISHED_REQUEST',
        );

        assert.deepEqual(
          actionUpdateTodoHide(
            'todo.id.1',
          ),
          {
            payload: 'todo.id.1',
            type: 'TODO_UPDATE_HIDE_REQUEST',
          },
          'TODO_UPDATE_HIDE_REQUEST',
        );

        assert.deepEqual(
          actionUpdateTodoPriority(
            'todo.id.1',
            1,
          ),
          {
            payload: {
              id: 'todo.id.1',
              priority: 1,
            },
            type: 'TODO_UPDATE_PRIORITY_REQUEST',
          },
          'TODO_UPDATE_PRIORITY_REQUEST',
        );

        assert.deepEqual(
          actionGetTodos(
          ),
          {
            type: 'TODO_GET_ALL_REQUEST',
          },
          'TODO_GET_ALL_REQUEST',
        );

        assert.deepEqual(
          actionGetTodo(
            'todo.id.1',
          ),
          {
            payload: 'todo.id.1',
            type: 'TODO_GET_REQUEST',
          },
          'TODO_GET_REQUEST',
        );

        assert.deepEqual(
          actionDeleteTodos(
          ),
          {
            type: 'TODO_DELETE_ALL_REQUEST',
          },
          'TODO_DELETE_ALL_REQUEST',
        );

        assert.deepEqual(
          actionDeleteTodo(
            'todo.id.1',
          ),
          {
            payload: 'todo.id.1',
            type: 'TODO_DELETE_REQUEST',
          },
          'TODO_DELETE_REQUEST',
        );

        assert.deepEqual(
          actionShowTodo(
            'SHOW_TYPE',
          ),
          {
            payload: 0,
            type: 'SHOW_TYPE',
          },
          'SHOW_TYPE',
        );

        assert.deepEqual(
          actionAddTodo(
            payload,
          ),
          {
            payload,
            type: 'TODO_ADD_REQUEST',
          },
          'TODO_ADD_REQUEST',
        );
      },
    );

    it(
      'Reducer',
      (
      ) => {
        assert.deepEqual(
          reducerTodo(
            initState,
            {
              payload,
              type: 'TODO_ADD_OK',
            },
          ).todos[0],
          payload,
          'TODO_ADD_OK',
        );

        assert.isFalse(
          reducerTodo(
            initState,
            {
              type: 'TODO_SHOWRECENT_OK',
            },
          ).showRecentFirst,
          'TODO_SHOWRECENT_OK',
        );

        assert.isTrue(
          reducerTodo(
            initState,
            {
              type: 'TODO_SHOWINCOMPLETE_OK',
            },
          ).showIncomplete,
          'TODO_SHOWINCOMPLETE_OK',
        );

        assert.isTrue(
          reducerTodo(
            initState,
            {
              type: 'TODO_SHOWFINISHED_OK',
            },
          ).showFinished,
          'TODO_SHOWFINISHED_OK',
        );

        assert.isTrue(
          reducerTodo(
            initState,
            {
              type: 'TODO_SHOWHIDDEN_OK',
            },
          ).showHidden,
          'TODO_SHOWHIDDEN_OK',
        );

        assert.strictEqual(
          reducerTodo(
            initState,
            {
              payload: 2,
              type: 'TODO_SHOWPRIORITY_OK',
            },
          ).showPriority,
          2,
          'TODO_SHOWPRIORITY_OK',
        );
      },
    );
  },
);
