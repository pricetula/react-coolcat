
/* eslint-env mocha */
import React from 'react';
import {
  shallow,
} from 'enzyme';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import {
  assert,
} from 'chai';
import ComponentAccountSignin, {
  styles,
} from './ComponentAccountSignin';

describe(
  '<ComponentAccountSignin />',
  (
  ) => {
    it(
      'Style should be correct',
      (
      ) => {
        assert.deepEqual(
          styles(
            {
              spacing: {
                unit: 1,
              },
            },
          ),
          {
            root: {
              flexGrow: 1,
            },
            formControl: {
              margin: 1,
            },
            button: {
              margin: 1,
            },
            leftIcon: {
              marginRight: 1,
            },
            rightIcon: {
              marginLeft: 1,
            },
          },
        );
      },
    );

    it(
      'Should render correctly',
      (
      ) => {
        const wrapper = shallow(
          <ComponentAccountSignin
            actionSignin={
              (
              ) => null
            }
            classes={
              {}
            }
          />,
        );

        assert.equal(
          wrapper.type(),
          Grid,
        );

        assert.equal(
          wrapper.childAt(0).type(),
          Grid,
        );

        assert.deepInclude(
          wrapper.childAt(0).props(),
          {
            item: true,
            sm: 6,
            xs: 12,
          },
        );

        assert.equal(
          wrapper
            .childAt(0)
            .childAt(0)
            .type(),
          FormControl,
        );

        assert.strictEqual(
          wrapper
            .childAt(0)
            .childAt(0)
            .prop('aria-describedby'),
          'email-helper-text',
        );

        assert.equal(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .type(),
          InputLabel,
        );

        assert.strictEqual(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .prop('htmlFor'),
          'email-helper',
        );

        assert.equal(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(1)
            .type(),
          Input,
        );

        assert.deepInclude(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(1)
            .props(),
          {
            fullWidth: true,
            type: 'email',
            id: 'email-helper',
            value: '',
          },
        );

        assert.equal(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(2)
            .type(),
          FormHelperText,
        );

        assert.strictEqual(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(2)
            .prop('id'),
          'email-helper-text',
        );

        assert.equal(
          wrapper.childAt(0).type(),
          Grid,
        );

        assert.deepInclude(
          wrapper.childAt(1).props(),
          {
            item: true,
            sm: 6,
            xs: 12,
          },
        );

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(0)
            .type(),
          FormControl,
        );

        assert.strictEqual(
          wrapper
            .childAt(1)
            .childAt(0)
            .prop('aria-describedby'),
          'password-helper-text',
        );

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(0)
            .type(),
          InputLabel,
        );

        assert.strictEqual(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(0)
            .prop('htmlFor'),
          'password-helper',
        );

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(1)
            .type(),
          Input,
        );

        assert.deepInclude(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(1)
            .props(),
          {
            fullWidth: true,
            type: 'password',
            id: 'password-helper',
            value: '',
          },
        );

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(2)
            .type(),
          FormHelperText,
        );

        assert.strictEqual(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(2)
            .prop('id'),
          'password-helper-text',
        );

        assert.deepInclude(
          wrapper.childAt(2).props(),
          {
            item: true,
            xs: 12,
          },
        );

        assert.deepInclude(
          wrapper.childAt(2).find(Button).props(),
          {
            raised: true,
            disabled: true,
            color: 'primary',
          },
        );

        wrapper.setState({
          email: 'fake@mail',
          password: 'password',
        });

        assert.isFalse(
          wrapper.childAt(2).find(Button).prop('disabled'),
        );
      },
    );
  },
);
