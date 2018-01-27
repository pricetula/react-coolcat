
/* eslint-env mocha */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import AssignmentIcon from 'material-ui-icons/Assignment';
import ExposureIcon from 'material-ui-icons/Exposure';
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

        let count = 0;

        while (count < 3) {
          assert.equal(
            wrapper
              .childAt(
                0,
              )
              .childAt(
                0,
              )
              .childAt(
                count,
              ).type(
              ),
            Link,
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
                count,
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
              .childAt(
                count,
              )
              .childAt(
                0,
              )
              .type(
              ),
            ListItem,
          );

          assert.isTrue(
            wrapper
              .childAt(
                0,
              )
              .childAt(
                0,
              )
              .childAt(
                count,
              )
              .childAt(
                0,
              )
              .prop(
                'button',
              ),
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
                count,
              )
              .childAt(
                0,
              )
              .children(
              ),
            2,
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
                count,
              )
              .childAt(
                0,
              )
              .childAt(
                0,
              )
              .type(
              ),
            ListItemIcon,
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
                count,
              )
              .childAt(
                0,
              )
              .childAt(
                1,
              )
              .type(
              ),
            ListItemText,
          );

          let primaryText = 'Home';
          let IconUsed = HomeIcon;

          if (count === 1) {
            primaryText = 'Todo';
            IconUsed = AssignmentIcon;
          } else if (count === 2) {
            primaryText = 'Counter';
            IconUsed = ExposureIcon;
          }

          assert.strictEqual(
            wrapper
              .childAt(
                0,
              )
              .childAt(
                0,
              )
              .childAt(
                count,
              )
              .childAt(
                0,
              )
              .childAt(
                1,
              )
              .prop(
                'primary',
              ),
            primaryText,
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
                count,
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
            IconUsed,
          );

          count += 1;
        }
      },
    );
  },
);
