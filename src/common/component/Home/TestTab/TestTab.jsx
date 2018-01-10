import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import TabContainer from '../../../mui/Component/TabContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    textAlign: 'center',
  },
});

class BasicTabs extends React.Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.handleChange = this.handleChange.bind(
      this,
    );

    this.state = {
      value: 0,
    };
  }

  handleChange(
    event,
    value,
  ) {
    this.setState(
      {
        value,
      },
    );
  }

  render(
  ) {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            centered
            value={value}
            onChange={this.handleChange}
          >
            <Tab label="Unit Tests" />
            <Tab label="Integration Tests" />
          </Tabs>
        </AppBar>

        {
          value === 0 &&
          <TabContainer
            className={classes.container}
          >
            Enzyme, Mocha, Chai and Sinon used for unit testing React components and app components
          </TabContainer>
        }

        {
          value === 1 &&
          <TabContainer
            className={classes.container}
          >
            Chai-HTTP used to test API rest server route requests and responses.
          </TabContainer>
        }

        {
          value === 2 &&
          <TabContainer
            className={classes.container}
          >
            Item One
          </TabContainer>
        }
      </div>
    );
  }
}

BasicTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  styles,
)(
  BasicTabs,
);
// <Tab label="Acceptance Tests" />