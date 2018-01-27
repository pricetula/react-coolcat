
/* eslint-env mocha */
import React from 'react';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Menu, {
  MenuItem,
} from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar';
import {
  shallow,
} from 'enzyme';
import {
  assert,
} from 'chai';
import ComponentNavbar, {
  styles,
} from './ComponentNavbar';

describe(
  '<ComponentNavbar />',
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
                common: {
                  white: '#FFF',
                },
              },
            },
          ),
          {
            root: {
              top: 0,
              left: 0,
              marginTop: 0,
              width: '100%',
            },
            appBar: {
              backgroundColor: '#FFF',
            },
            flex: {
              flex: 1,
            },
            menuButton: {
              marginLeft: 0,
              marginRight: 0,
            },
            textColor: '#191919',
          },
        );
      },
    );

    it(
      'Should render correctly',
      (
      ) => {
        const wrapper = shallow(
          <ComponentNavbar
            actionUiState={
              (
              ) => null
            }
            actionSignout={
              (
              ) => null
            }
            classes={
              {}
            }
            uiState={
              {
                stateSigninSignupOpen: true,
              }
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
          AppBar,
        );

        assert.deepInclude(
          wrapper
            .childAt(
              0,
            ).props(
            ),
          {
            position: 'fixed',
            id: 'app-bar-container',
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
            )
            .childAt(
              0,
            )
            .type(
            ),
          Toolbar,
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
          5,
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
          IconButton,
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
              0,
            )
            .props(
            ),
          {
            'aria-label': 'Menu',
            id: 'app-bar-left-button',
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
            )
            .childAt(
              0,
            )
            .type(
            ),
          MenuIcon,
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
          Typography,
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
            id: 'app-bar-title',
            type: 'title',
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
              1,
            )
            .childAt(
              0,
            )
            .type(
            ),
          'img',
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
            .childAt(
              0,
            )
            .props(
            ),
          {
            alt: 'logo',
            width: 65,
            height: 40,
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
          IconButton,
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
              2,
            )
            .props(
            ),
          {
            'aria-owns': 'app-bar-menu-public',
            'aria-haspopup': 'true',
            'aria-label': 'Menu',
            id: 'app-bar-right-button',
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
            .childAt(
              0,
            )
            .type(
            ),
          MoreVertIcon,
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
              3,
            )
            .type(
            ),
          Menu,
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
              3,
            )
            .props(
            ),
          {
            id: 'app-bar-menu-account',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            open: false,
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
            .childAt(
              3,
            )
            .children(
            ),
          4,
        );

        function menuItemTest(
          menuItems,
          childIndex = 3,
        ) {
          menuItems.forEach(
            item => assert.equal(
              wrapper
                .childAt(
                  0,
                )
                .childAt(
                  0,
                )
                .childAt(
                  childIndex,
                )
                .childAt(
                  item.id,
                )
                .type(
                ),
              MenuItem,
            ),
          );
        }

        menuItemTest(
          [
            {
              id: 0,
              text: 'Account Settings',
            },
            {
              id: 1,
              text: 'Technical Details',
            },
            {
              id: 2,
              text: 'Get In Touch',
            },
            {
              id: 3,
              text: 'Sign Out',
            },
          ],
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
              4,
            )
            .props(
            ),
          {
            id: 'app-bar-menu-public',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
            open: false,
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
            .childAt(
              4,
            )
            .children(
            ),
          2,
        );

        menuItemTest(
          [
            {
              id: 0,
              text: 'Technical Details',
            },
            {
              id: 1,
              text: 'Get In Touch',
            },
          ],
        );
      },
    );
  },
);
