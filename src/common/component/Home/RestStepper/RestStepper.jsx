import React from 'react';
import PropTypes from 'prop-types';
import Stepper, {
  Step,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

export const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  container: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
  },
  instructions: {
    textAlign: 'center',
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  controlButton: {
    textAlign: 'center',
  },
});

function getSteps(
) {
  return [
    'Back End Server',
    'MongoDB',
    'Authentication',
  ];
}

function getStepContent(
  step,
) {
  switch (step) {
    case 0:
      return 'Express server built on REST architecture and secured against XSS and CSRF attacks';
    case 1:
      return 'Mongoose ORM is used to connect to MongoDB database hosted on mlab platform';
    case 2:
      return 'JSON Web Tokens (JWT) are used for authentication to access resources on the back-end server';
    default:
      return 'Unknown step';
  }
}

class HorizontalLinearStepper extends React.Component {
  constructor(
    props,
  ) {
    super(
      props,
    );

    this.renderWide = this.renderWide.bind(
      this,
    );
    this.renderNarrow = this.renderNarrow.bind(
      this,
    );
    this.isStepOptional = this.isStepOptional.bind(
      this,
    );
    this.isStepSkipped = this.isStepSkipped.bind(
      this,
    );
    this.handleNext = this.handleNext.bind(
      this,
    );
    this.handleBack = this.handleBack.bind(
      this,
    );
    this.handleSkip = this.handleSkip.bind(
      this,
    );
    this.handleReset = this.handleReset.bind(
      this,
    );

    this.state = {
      activeStep: 0,
      skipped: new Set(
      ),
    };
  }

  isStepOptional(
    step,
  ) {
    return step === 1;
  }

  isStepSkipped(
    step,
  ) {
    return this.state.skipped.has(
      step,
    );
  }

  handleNext(
  ) {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (
      this.isStepSkipped(
        activeStep,
      )
    ) {
      skipped = new Set(
        skipped.values(
        ),
      );
      skipped.delete(
        activeStep,
      );
    }
    this.setState(
      {
        activeStep: activeStep + 1,
        skipped,
      },
    );
  }

  handleBack(
  ) {
    const { activeStep } = this.state;
    this.setState(
      {
        activeStep: activeStep - 1,
      },
    );
  }

  handleSkip(
  ) {
    const { activeStep } = this.state;
    if (
      !this.isStepOptional(
        activeStep,
      )
    ) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error(
        "You can't skip a step that isn't optional.",
      );
    }
    const skipped = new Set(
      this.state.skipped.values(
      ),
    );
    skipped.add(
      activeStep,
    );
    this.setState(
      {
        activeStep: this.state.activeStep + 1,
        skipped,
      },
    );
  }

  handleReset(
  ) {
    this.setState(
      {
        activeStep: 0,
      },
    );
  }

  renderWide(
  ) {
    const { classes } = this.props;
    const steps = getSteps(
    );
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {
            steps.map(
              (
                label,
                index,
              ) => {
                const props = {};

                const labelProps = {};

                if (
                  this.isStepOptional(
                    index,
                  )
                ) {
                  labelProps.optional = <Typography type="caption">Optional</Typography>;
                }
                if (
                  this.isStepSkipped(
                    index,
                  )
                ) {
                  props.completed = false;
                }
                return (
                  <Step key={label} {...props}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              },
            )
          }
        </Stepper>

        <div className={classes.container}>
          {
            activeStep === steps.length
              ? (
                <div>
                  <Typography className={classes.instructions}>
                    Server details finished
                  </Typography>
                  <Button onClick={this.handleReset} className={classes.button}>
                    Start Again
                  </Button>
                </div>
              )
              : (
                <div>
                  <Typography className={classes.instructions}>
                    {
                      getStepContent(
                        activeStep,
                      )
                    }
                  </Typography>

                  <div>
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
                        className={classes.controlButton}
                      >
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      </Grid>

                      <Grid
                        item
                        sm={5}
                        xs={10}
                        className={classes.controlButton}
                      >
                        <Button
                          raised
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              )
          }
        </div>
      </div>
    );
  }

  renderNarrow(
  ) {
    const { classes } = this.props;
    const steps = getSteps(
    );
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {
            steps.map(
              (label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          raised
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ),
            )
          }
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Start Again
            </Button>
          </Paper>
        )}
      </div>
    );
  }

  render(
  ) {
    const {
      smaller,
    } = this.props;

    return smaller
      ? this.renderNarrow(
      )
      : this.renderWide(
      );
  }
}

HorizontalLinearStepper.defaultProps = {
  smaller: false,
};

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  smaller: PropTypes.bool.isRequired,
};

export default HorizontalLinearStepper;
