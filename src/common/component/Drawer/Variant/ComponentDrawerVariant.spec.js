
/* eslint-env mocha */
import React from 'react';
import {
  shallow,
} from 'enzyme';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';
import List, {
  ListItem,
  ListItemIcon,
  // ListItemText,
} from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
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

        assert.lengthOf(
          wrapper.children,
          1,
        );

        assert.deepInclude(
          wrapper.find(Drawer).props(),
          {
            BackdropInvisible: true,
            open: false,
          },
        );

        assert.lengthOf(
          wrapper.find(Drawer).children,
          1,
        );

        assert.equal(
          wrapper.find(Drawer).childAt(0).type(),
          List,
        );

        assert.lengthOf(
          wrapper.childAt(0).childAt(0).children,
          1,
        );

        assert.equal(
          wrapper.find(Drawer).childAt(0).childAt(0).type(),
          Link,
        );

        assert.strictEqual(
          wrapper.find(Drawer).childAt(0).childAt(0).prop('to'),
          '/',
        );

        assert.equal(
          wrapper.find(Drawer)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .type(),
          ListItem,
        );

        assert.equal(
          wrapper.find(Drawer)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .type(),
          ListItemIcon,
        );

        assert.equal(
          wrapper.find(Drawer)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .type(),
          HomeIcon,
        );
        // wrapper.find(Drawer);
      },
    );
  },
);
