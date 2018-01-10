import React, {
  Component,
} from 'react';
import IconVisibility from 'material-ui-icons/Visibility';
import IconCloud from 'material-ui-icons/Cloud';
import IconBugReport from 'material-ui-icons/BugReport';
import IconTouchApp from 'material-ui-icons/TouchApp';
import IconPolymer from 'material-ui-icons/Polymer';
import IconLibraryAdd from 'material-ui-icons/LibraryAdd';
import IconRotateLeft from 'material-ui-icons/RotateLeft';
import IconImportantDevices from 'material-ui-icons/ImportantDevices';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import ScrollReveal from 'scrollreveal';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';

import Banner from './Banner';
import TestTab from './TestTab';
import RestStepper from './RestStepper';
import CardDetails from './CardDetails';
/* eslint-disable */
const styles = theme => {
  console.log(theme);
  return (
    {
      root: {
        flexGrow: 1,
      },
      bannerContainer: {
        height: 600,
        overflowY: 'hidden',
      },
      banner: {
        height: 600,
        width: '100vw',
        textAlign: 'center',
        paddingTop: '12%',
      },
      bannerContainerA: {
        height: 400,
        overflowY: 'hidden',
      },
      bannerA: {
        height: 400,
        width: '100vw',
        textAlign: 'center',
        paddingTop: '10%',
      },
      bannerText: {
        color: theme.palette.common.white,
      },
      bannerButton: {
        backgroundColor: theme.palette.common.white,
        marginTop: '3em',
      },
      sectionContainer: {
        backgroundColor: theme.palette.common.white,
        paddingTop: '3em',
        paddingBottom: '3em',
        minHeight: 400,
      },
      sectionContainerMidItem: {
        border: `1px solid ${theme.palette.grey[100]}`,
        borderBottom: 0,
        borderTop: 0,
      },
      sectionContainerHeader: {
        color: theme.palette.grey[500],
        textAlign: 'center',
      },
      sectionContainerText: {
        height: '8em',
        padding: '1em',
        color: theme.palette.grey[900],
        textAlign: 'center',
      },
      sectionContainerFab: {
        backgroundColor: theme.palette.primary[900],
      },
    }
  );
}
/* eslint-enable */

const homeSections = classes => [
  {
    id: 1,
    title: 'UI / UX',
    subTitle: `
      Slick flat design following Google's Material design specifications.
    `,
    fab: (
      <Button
        fab
        aria-label="UI"
        className={classes.sectionContainerFab}
      >
        <IconVisibility
          color="white"
        />
      </Button>
    ),
  },
  {
    id: 2,
    title: 'Back-end server',
    subTitle: `
      RESTful API server using MongoDB No-SQL database and JWT token for authentication.
    `,
    fab: (
      <Button
        fab
        aria-label="server"
        className={classes.sectionContainerFab}
      >
        <IconCloud
          color="white"
        />
      </Button>
    ),
  },
  {
    id: 3,
    title: 'Testing',
    subTitle: `
      UI components and the API have been test using on Unit, Integration & Acceptance tests
    `,
    fab: (
      <Button
        fab
        aria-label="add"
        className={classes.sectionContainerFab}
      >
        <IconBugReport
          color="white"
        />
      </Button>
    ),
  },
];

class Mycomponent extends Component {
  componentDidMount(
  ) {
    const sr = ScrollReveal(
      {
        duration: 1500,
        reset: true,
      },
    );

    sr.reveal(
      '#banner-text',
    );
  }

  render(
  ) {
    const {
      classes,
    } = this.props;

    return (
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-around"
        className={classes.root}
      >
        <Banner
          classes={classes}
          bgImage="https://i.pinimg.com/originals/50/ca/ac/50caac949c68912fb6f53b49ba766d62.jpg"
          header="coolcat"
          text="A React & RESTful Express API demo"
        />

        <Grid
          item
          xs={10}
        >
          <Grid
            container
            className={classes.sectionContainer}
          >
            {
              homeSections(
                classes,
              ).map(
                section => (
                  <Grid
                    item
                    md={4}
                    sm={6}
                    xs={12}
                    key={section.id}
                    className={
                      section.id === 2 && classes.sectionContainerMidItem
                    }
                  >
                    <Typography
                      type="title"
                      className={classes.sectionContainerHeader}
                    >
                      {section.title}
                    </Typography>

                    <Typography
                      type="subheading"
                      className={classes.sectionContainerText}
                    >
                      {section.subTitle}
                    </Typography>

                    <div
                      style={{
                        textAlign: 'center',
                        marginBottom: '2em',
                      }}
                    >
                      {section.fab}
                    </div>
                  </Grid>
                ),
              )
            }
          </Grid>
        </Grid>

        <Banner
          smaller
          classes={classes}
          bgImage="http://imgs.abduzeedo.com/files/wallpapers/wpw330/wp_1920.jpg"
          header="UI / UX"
          text="Server-side Rendered React, Redux and Redux-Saga Details"
        />

        <Grid
          item
          xs={12}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
            className={classes.sectionContainer}
          >
            <Grid
              item
              sm={5}
              xs={10}
            >
              <CardDetails
                avatarIcon={<IconPolymer />}
                title="Material-UI & React"
                subTitle="Front-end UI frameworks"
                text={
                  `
                    UI is designed using Material-UI Framework which follows Google's Material specs and built on ReactJS library used for responsive User Interface interaction.
                  `
                }
                listDetail={
                  [
                    {
                      title: 'Responsive Design',
                      subTitle: 'UI scaling based on the aspect ratio.',
                      icon: <IconImportantDevices />,
                    },
                    {
                      title: 'Interactive UI',
                      subTitle: 'ReactJS listens on UI events and can manage it\'s state.',
                      icon: <IconTouchApp />,
                    },
                  ]
                }
              />
            </Grid>

            <Grid
              item
              sm={5}
              xs={10}
            >
              <CardDetails
                avatarIcon={<IconTouchApp />}
                title="Redux & Redux-Saga"
                subTitle="ReactJS state management"
                text="Redux is used to handle UI states and data from the backend server, Redux-Saga is used as a middle-ware to be applied to dispatched actions from redux"
                listDetail={
                  [
                    {
                      title: 'State Management',
                      subTitle: 'Storing and management of UI state such as button toggle states.',
                      icon: <IconLibraryAdd />,
                    },
                    {
                      title: 'Side Effects',
                      subTitle: 'Management of asynchronous actions & dispatched redux actions',
                      icon: <IconRotateLeft />,
                    },
                  ]
                }
              />
            </Grid>
          </Grid>
        </Grid>

        <Banner
          smaller
          classes={classes}
          bgImage="https://orig00.deviantart.net/b167/f/2014/330/c/f/flat_pattern_quilts_wallpaper_1_by_microfreaks-d87pp8s.png"
          header="RESTful API"
          text="Backend Express rest server with MongoDB"
        />

        <Grid
          item
          xs={12}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
            className={classes.sectionContainer}
          >
            <Hidden mdUp>
              <Grid
                item
                xs={10}
              >
                <RestStepper
                  smaller
                />
              </Grid>
            </Hidden>

            <Hidden smDown>
              <Grid
                item
                xs={8}
              >
                <RestStepper />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>

        <Banner
          smaller
          classes={classes}
          bgImage="https://hdwallsource.com/img/2014/9/polygon-wallpaper-31615-32349-hd-wallpapers.jpg"
          header="Testing"
          text="Backend Express rest server with MongoDB"
        />

        <Grid
          item
          xs={12}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="space-around"
            className={classes.sectionContainer}
          >
            <Grid
              item
              md={8}
              sm={10}
              xs={12}
            >
              <TestTab />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Mycomponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  styles,
)(
  Mycomponent,
);
