import React from 'react';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import preset from 'jss-preset-default';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import { green, red } from 'material-ui/colors';

export default function (
  App,
) {
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry(
  );

  // Create a theme instance.
  const theme = createMuiTheme(
    {
      palette: {
        primary: green,
        accent: red,
        type: 'light',
      },
    },
  );

  // Configure JSS
  const jss = create(
    preset(
    ),
  );

  jss.options.createGenerateClassName = createGenerateClassName;

  // Render the component to a string.
  const Component = (
    <JssProvider
      registry={sheetsRegistry}
      jss={jss}
    >
      <MuiThemeProvider
        theme={theme}
        sheetsManager={{}}
      >
        <App />
      </MuiThemeProvider>
    </JssProvider>
  );

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString(
  );

  return {
    Component,
    css,
  };
}
