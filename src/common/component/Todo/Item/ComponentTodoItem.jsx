import React from 'react';
import PropTypes from 'prop-types';

function Mycomponent(
  {
    storedRemotely,
    details: {
      item,
      description,
    },
  },
) {
  return (
    <div
      style={{
        backgroundColor: storedRemotely ? 'green' : 'yellow',
      }}
    >
      {item} - {description}
    </div>
  );
}

Mycomponent.propTypes = {
  details: PropTypes.shape(
    {
      item: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default Mycomponent;

