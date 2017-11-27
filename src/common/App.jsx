import React from 'react';
import PropTypes from 'prop-types';

function App(
  {
    appState,
  },
) {
  return (
    <ul>
      {
        appState.length === 0
          ? <li>No data</li>
          : appState.map(
            data => (
              <li key={data.id}>
                {data.title}
              </li>
            ),
          )
      }
    </ul>
  );
}

App.propTypes = {
  appState: PropTypes.array.isRequired,
};

export default App;
