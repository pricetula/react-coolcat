
/* eslint-env mocha */
import React from 'react';
import { Link } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import IconClose from 'material-ui-icons/Close';
import Tabs, { Tab } from 'material-ui/Tabs';
/*
import Typography from 'material-ui/Typography';
import IconPersonAdd from 'material-ui-icons/PersonAdd';
import IconPersonOutline from 'material-ui-icons/PersonPin';
*/
import {
  shallow,
} from 'enzyme';
import {
  assert,
} from 'chai';
import TabContainer from '../../../mui/Component/TabContainer';
import ComponentAccountSignin from '../Signin';
import ComponentAccountSignup from '../Signup';
import ComponentAccountSignupSigninContainer, {
  styles,
} from './ComponentAccountSignupSigninContainer';

describe(
  '<ComponentAccountSignupSigninContainer />',
  (
  ) => {
    it(
      'Style should be correct',
      (
      ) => {
        assert.deepEqual(
          styles,
          {
            appBar: {
              position: 'relative',
            },
            flex: {
              flex: 1,
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
          <ComponentAccountSignupSigninContainer
            uiState={
              {
                stateSigninSignupOpen: false,
              }
            }
            classes={
              {}
            }
          />,
        );

        assert.equal(
          wrapper.type(),
          Dialog,
        );

        assert.deepInclude(
          wrapper.props(),
          {
            fullScreen: true,
            open: false,
          },
        );

        assert.equal(
          wrapper.childAt(0).type(),
          AppBar,
        );

        assert.equal(
          wrapper
            .childAt(0)
            .childAt(0)
            .type(),
          Toolbar,
        );

        assert.equal(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .type(),
          Link,
        );

        assert.strictEqual(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .prop('to'),
          '/',
        );

        assert.equal(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .type(),
          IconButton,
        );

        assert.deepInclude(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .props(),
          {
            color: 'contrast',
            'aria-label': 'Close',
          },
        );

        assert.equal(
          wrapper
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .type(),
          IconClose,
        );

        //---------------------------------------------------------------------
        assert.equal(
          wrapper.childAt(1).type(),
          'div',
        );

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(0)
            .type(),
          AppBar,
        );

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(0)
            .type(),
          Tabs,
        );

        assert.deepInclude(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(0)
            .props(),
          {
            centered: true,
            fullWidth: true,
            value: 0,
          },
        );

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .type(),
          Tab,
        );

        assert.strictEqual(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(0)
            .childAt(0)
            .prop('label'),
          'Sign In',
        );

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(0)
            .childAt(1)
            .type(),
          Tab,
        );

        assert.strictEqual(
          wrapper
            .childAt(1)
            .childAt(0)
            .childAt(0)
            .childAt(1)
            .prop('label'),
          'Sign Up',
        );

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(1)
            .type(),
          TabContainer,
        );

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(1)
            .childAt(0)
            .type(),
          ComponentAccountSignin,
        );

        wrapper.setState({
          value: 1,
        });

        assert.equal(
          wrapper
            .childAt(1)
            .childAt(1)
            .childAt(0)
            .type(),
          ComponentAccountSignup,
        );
      },
    );
  },
);
