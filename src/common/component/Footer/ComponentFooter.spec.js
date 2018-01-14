
/* eslint-env mocha */
import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {
  shallow,
} from 'enzyme';
import {
  assert,
} from 'chai';
import {
  grey,
} from 'material-ui/colors';
import ComponentFooter, {
  styles,
} from './ComponentFooter';

describe(
  '<ComponentFooter />',
  (
  ) => {
    it(
      'Style should be correct',
      (
      ) => {
        assert.deepEqual(
          styles(
            {
              palette: {
                grey,
              },
            },
          ),
          {
            root: {
              flex: '1 100%',
              width: '100%',
              backgroundColor: grey[900],
            },
            text: {
              color: grey[300],
              textAlign: 'center',
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
          <ComponentFooter
            classes={
              {}
            }
          />,
        );

        assert.lengthOf(
          wrapper.children(
          ),
          1,
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
            ).props(
            ),
          {
            container: true,
            direction: 'row',
            alignItems: 'center',
            justify: 'space-around',
            style: {
              height: 80,
            },
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
          1,
        );

        assert.equal(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            ).type(
            ),
          Grid,
        );

        assert.deepInclude(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            ).props(
            ),
          {
            item: true,
            xs: 10,
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
              0,
            ).type(
            ),
          Typography,
        );

        assert.strictEqual(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            )
            .childAt(
              0,
            ).prop(
              'type',
            ),
          'body2',
        );
      },
    );
  },
);
