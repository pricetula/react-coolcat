import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, {
  CardHeader,
  CardContent,
  CardActions,
} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  media: {
    height: 150,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create(
      'transform',
      {
        duration: theme.transitions.duration.shortest,
      },
    ),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.primary[900],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class Mycomponent extends React.Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.handleExpandClick = this.handleExpandClick.bind(
      this,
    );

    this.state = {
      expanded: false,
    };
  }

  handleExpandClick(
  ) {
    this.setState(
      {
        expanded: !this.state.expanded,
      },
    );
  }

  render(
  ) {
    const {
      classes,
      avatarIcon,
      title,
      subTitle,
      text,
      listDetail,
    } = this.props;

    const arrayCount = listDetail.length;

    return (
      <div>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                aria-label="Recipe"
                className={classes.avatar}
              >
                {avatarIcon}
              </Avatar>
            }
            title={title}
            subheader={subTitle}
          />
          <CardContent>
            <Typography component="p">
              {text}
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <div className={classes.flexGrow} />
            <IconButton
              className={
                classnames(
                  classes.expand,
                  {
                    [classes.expandOpen]: this.state.expanded,
                  },
                )
              }
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse
            in={this.state.expanded}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography
                paragraph
                type="body2"
              >
                Details:
              </Typography>
              <List>
                {
                  listDetail.map(
                    (
                      detail,
                      index,
                    ) => {
                      if (
                        index === (arrayCount - 1)
                      ) {
                        return (
                          <div key={detail.title}>
                            <ListItem>
                              <Avatar>
                                {detail.icon}
                              </Avatar>
                              <ListItemText
                                primary={detail.title}
                                secondary={detail.subTitle}
                              />
                            </ListItem>
                          </div>
                        );
                      }

                      return (
                        <div key={detail.title}>
                          <ListItem>
                            <Avatar>
                              {detail.icon}
                            </Avatar>
                            <ListItemText
                              primary={detail.title}
                              secondary={detail.subTitle}
                            />
                          </ListItem>
                          <Divider inset />
                        </div>
                      );
                    },
                  )
                }
              </List>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
  avatarIcon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  listDetail: PropTypes.array.isRequired,
};

export default withStyles(
  styles,
)(
  Mycomponent,
);
