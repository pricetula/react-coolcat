
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
import ComponentAccountSignup, {
  styles,
} from './ComponentAccountSignup';

describe(
  '<ComponentAccountSignup />',
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
          <ComponentAccountSignup
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
          'firstname-helper-text',
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
          'firstname-helper',
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
            id: 'firstname-helper',
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
          'firstname-helper-text',
        );
        //---------------------------------------------------------
        assert.equal(
          wrapper.childAt(1).type(),
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
          'lastname-helper-text',
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
          'lastname-helper',
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
            id: 'lastname-helper',
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
          'lastname-helper-text',
        );
        //---------------------------------------------------------
        assert.equal(
          wrapper.childAt(2).type(),
          Grid,
        );

        assert.deepInclude(
          wrapper.childAt(2).props(),
          {
            item: true,
            xs: 12,
          },
        );

        assert.equal(
          wrapper
            .childAt(2)
            .childAt(0)
            .type(),
          FormControl,
        );

        assert.strictEqual(
          wrapper
            .childAt(2)
            .childAt(0)
            .prop('aria-describedby'),
          'email-helper-text',
        );

        assert.equal(
          wrapper
            .childAt(2)
            .childAt(0)
            .childAt(0)
            .type(),
          InputLabel,
        );

        assert.strictEqual(
          wrapper
            .childAt(2)
            .childAt(0)
            .childAt(0)
            .prop('htmlFor'),
          'email-helper',
        );

        assert.equal(
          wrapper
            .childAt(2)
            .childAt(0)
            .childAt(1)
            .type(),
          Input,
        );

        assert.deepInclude(
          wrapper
            .childAt(2)
            .childAt(0)
            .childAt(1)
            .props(),
          {
            type: 'email',
            fullWidth: true,
            id: 'email-helper',
            value: '',
          },
        );

        assert.equal(
          wrapper
            .childAt(2)
            .childAt(0)
            .childAt(2)
            .type(),
          FormHelperText,
        );

        assert.strictEqual(
          wrapper
            .childAt(2)
            .childAt(0)
            .childAt(2)
            .prop('id'),
          'email-helper-text',
        );
        //---------------------------------------------------------
        assert.equal(
          wrapper.childAt(3).type(),
          Grid,
        );

        assert.deepInclude(
          wrapper.childAt(3).props(),
          {
            item: true,
            xs: 12,
          },
        );

        assert.equal(
          wrapper
            .childAt(3)
            .childAt(0)
            .type(),
          FormControl,
        );

        assert.strictEqual(
          wrapper
            .childAt(3)
            .childAt(0)
            .prop('aria-describedby'),
          'password-helper-text',
        );

        assert.equal(
          wrapper
            .childAt(3)
            .childAt(0)
            .childAt(0)
            .type(),
          InputLabel,
        );

        assert.strictEqual(
          wrapper
            .childAt(3)
            .childAt(0)
            .childAt(0)
            .prop('htmlFor'),
          'password-helper',
        );

        assert.equal(
          wrapper
            .childAt(3)
            .childAt(0)
            .childAt(1)
            .type(),
          Input,
        );

        assert.deepInclude(
          wrapper
            .childAt(3)
            .childAt(0)
            .childAt(1)
            .props(),
          {
            type: 'password',
            fullWidth: true,
            id: 'password-helper',
            value: '',
          },
        );

        assert.equal(
          wrapper
            .childAt(3)
            .childAt(0)
            .childAt(2)
            .type(),
          FormHelperText,
        );

        assert.strictEqual(
          wrapper
            .childAt(3)
            .childAt(0)
            .childAt(2)
            .prop('id'),
          'password-helper-text',
        );
        //---------------------------------------------------------
        assert.equal(
          wrapper.childAt(4).type(),
          Grid,
        );

        assert.deepInclude(
          wrapper.childAt(4).props(),
          {
            item: true,
            xs: 12,
          },
        );

        assert.equal(
          wrapper
            .childAt(4)
            .childAt(0)
            .type(),
          FormControl,
        );

        assert.strictEqual(
          wrapper
            .childAt(4)
            .childAt(0)
            .prop('aria-describedby'),
          'passwordc-helper-text',
        );

        assert.equal(
          wrapper
            .childAt(4)
            .childAt(0)
            .childAt(0)
            .type(),
          InputLabel,
        );

        assert.strictEqual(
          wrapper
            .childAt(4)
            .childAt(0)
            .childAt(0)
            .prop('htmlFor'),
          'passwordc-helper',
        );

        assert.equal(
          wrapper
            .childAt(4)
            .childAt(0)
            .childAt(1)
            .type(),
          Input,
        );

        assert.deepInclude(
          wrapper
            .childAt(4)
            .childAt(0)
            .childAt(1)
            .props(),
          {
            type: 'password',
            fullWidth: true,
            id: 'passwordc-helper',
            value: '',
          },
        );

        assert.equal(
          wrapper
            .childAt(4)
            .childAt(0)
            .childAt(2)
            .type(),
          FormHelperText,
        );

        assert.strictEqual(
          wrapper
            .childAt(4)
            .childAt(0)
            .childAt(2)
            .prop('id'),
          'passwordc-helper-text',
        );
        //---------------------------------------------------------
        assert.equal(
          wrapper.childAt(5).type(),
          Grid,
        );

        assert.deepInclude(
          wrapper.childAt(5).props(),
          {
            item: true,
            xs: 12,
          },
        );

        assert.deepInclude(
          wrapper
            .childAt(5)
            .find(Button)
            .props(),
          {
            raised: true,
            disabled: true,
            color: 'primary',
          },
        );

        wrapper.setState({
          email: 'fake@mail',
          password: 'password',
          firstName: 'firstName',
          lastName: 'lastName',
          passwordConfirm: 'password2',
        });

        assert.isTrue(
          wrapper.childAt(5).find(Button).prop('disabled'),
        );

        wrapper.setState({
          passwordConfirm: 'password',
        });

        assert.isFalse(
          wrapper.childAt(5).find(Button).prop('disabled'),
        );
        //---------------------------------------------------------
      },
    );
  },
);
