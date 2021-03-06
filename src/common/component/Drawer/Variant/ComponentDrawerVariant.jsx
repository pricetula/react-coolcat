import React from 'react';
import PropTypes from 'prop-types';
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

export const styles = (
) => (
  {
    root: {
      width: '100%',
      maxWidth: 400,
    },
    links: {
      textDecoration: 'none',
    },
  }
);

const Mycomponent = (
  {
    classes,
    actionUiState,
    uiState,
  },
) => (
  <div className={classes.root}>
    <Drawer
      BackdropInvisible
      style={
        {
          backgroundColor: 'rgba(235, 208, 255, 0.5)',
        }
      }
      open={uiState.stateLdrawerOpen}
      onRequestClose={
        (
        ) => actionUiState(
          'STATE_LDRAWER_OPEN',
        )
      }
    >
      <List>
        <Link
          className={classes.links}
          to="/"
        >
          <ListItem
            button
            onClick={
              (
              ) => actionUiState(
                'STATE_LDRAWER_OPEN',
                )
            }
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link
          className={classes.links}
          to="/todo"
        >
          <ListItem
            button
            onClick={
              (
              ) => actionUiState(
                'STATE_LDRAWER_OPEN',
                )
            }
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Todo" />
          </ListItem>
        </Link>

        <Link
          className={classes.links}
          to="/counter"
        >
          <ListItem
            button
            onClick={
              (
              ) => actionUiState(
                'STATE_LDRAWER_OPEN',
                )
            }
          >
            <ListItemIcon>
              <ExposureIcon />
            </ListItemIcon>
            <ListItemText primary="Counter" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  </div>
);

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
  actionUiState: PropTypes.func.isRequired,
  uiState: PropTypes.object.isRequired,
};

export default Mycomponent;
