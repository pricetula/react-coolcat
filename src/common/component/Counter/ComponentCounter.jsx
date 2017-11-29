import React from 'react';
import PropTypes from 'prop-types';

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

      <button
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
      </button>

      <button
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
      </button>

      <button
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
      </button>
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
