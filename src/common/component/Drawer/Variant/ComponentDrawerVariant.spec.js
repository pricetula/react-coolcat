
/* eslint-env mocha */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import {
  shallow,
} from 'enzyme';
import {
  assert,
} from 'chai';
import ComponentDrawerVariant, {
  styles,
} from './ComponentDrawerVariant';

describe(
  '<ComponentDrawerVariant />',
  (
  ) => {
    it(
      'Style should be correct',
      (
      ) => {
        assert.deepEqual(
          styles(
          ),
          {
            root: {
              width: '100%',
              maxWidth: 400,
            },
            links: {
              textDecoration: 'none',
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
          <ComponentDrawerVariant
            actionUiState={
              (
              ) => null
            }
            classes={
              {}
            }
            uiState={
              {
                stateLdrawerOpen: false,
              }
            }
          />,
        );
console.log(wrapper.children().length)
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
          Drawer,
        );

        assert.deepInclude(
          wrapper
            .childAt(
              0,
            ).props(
            ),
          {
            BackdropInvisible: true,
            open: false,
            style: {
              backgroundColor: 'rgba(235, 208, 255, 0.5)',
            },
          },
        );

        assert.lengthOf(
          wrapper
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
            ).type(
            ),
          List,
        );

        assert.lengthOf(
          wrapper
            .childAt(
              0,
            )
            .childAt(
              0,
            ).children(
            ),
          3,
        );
      },
    );
  },
);
