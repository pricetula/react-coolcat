import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

function ComponentCounter(
  {
    notification,
    counter,
    actionNotify,
    actionIncreaseCount,
    actionDecreaseCount,
    actionResetCount,
  },
) {
  return (
    <div>
      <h2>Counter</h2>

      <h4>{notification}</h4>

      Counter: <b>{counter}</b> <br />

      <Button
        raised
        color="primary"
        onClick={
          (
          ) => {
            actionIncreaseCount(
            );
            actionNotify(
              'Increasing Count',
            );
          }
        }
      >
        Increase Count
      </Button>

      <Button
        raised
        color="red"
        onClick={
          (
          ) => {
            actionResetCount(
            );
            actionNotify(
              'Reseting Count',
            );
          }
        }
      >
        Reset Count
      </Button>

      <Button
        raised
        color="secondary"
        onClick={
          (
          ) => {
            actionDecreaseCount(
            );
            actionNotify(
              'Decreasing Count',
            );
          }
        }
      >
        Decrease Count
      </Button>
    </div>
  );
}

ComponentCounter.propTypes = {
  notification: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  actionNotify: PropTypes.func.isRequired,
  actionIncreaseCount: PropTypes.func.isRequired,
  actionDecreaseCount: PropTypes.func.isRequired,
  actionResetCount: PropTypes.func.isRequired,
};

export default ComponentCounter;
