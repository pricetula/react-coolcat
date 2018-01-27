
/* eslint-env mocha */
import React from 'react';
import Grid from 'material-ui/Grid';
import Input, {
  InputLabel,
} from 'material-ui/Input';
import {
  FormControl,
  FormHelperText,
} from 'material-ui/Form';
import {
  shallow,
} from 'enzyme';
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
            actionSignup={
              (
              ) => null
            }
            classes={
              {}
            }
          />,
        );

        assert.equal(
          wrapper.type(
          ),
          Grid,
        );

        assert.isTrue(
          wrapper.prop(
            'container',
          ),
        );

        assert.lengthOf(
          wrapper.children(
          ),
          6,
        );

        assert.equal(
          wrapper
            .childAt(
              0,
            )
            .type(
            ),
          Grid,
        );

        assert.deepInclude(
          wrapper
            .childAt(
              0,
            )
            .props(
            ),
          {
            item: true,
            sm: 6,
            xs: 12,
          },
        );

        assert.equal(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .type(
            ),
          FormControl,
        );

        assert.deepInclude(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .props(
            ),
          {
            style: {
              width: '90%',
            },
            'aria-describedby': 'firstname-helper-text',
          },
        );

        assert.lengthOf(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .children(
            ),
          3,
        );

        assert.equal(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .type(
            ),
          InputLabel,
        );

        assert.equal(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .prop(
              'htmlFor',
            ),
          'firstname-helper',
        );

        assert.equal(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .childAt(
              1,
            )
            .type(
            ),
          Input,
        );

        assert.deepInclude(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .childAt(
              1,
            )
            .props(
            ),
          {
            fullWidth: true,
            id: 'firstname-helper',
            value: '',
          },
        );

        assert.equal(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .childAt(
              2,
            )
            .type(
            ),
          FormHelperText,
        );

        assert.equal(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .childAt(
              2,
            )
            .prop(
              'id',
            ),
          'firstname-helper-text',
        );
      },
    );
  },
);
