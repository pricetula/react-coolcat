import React from 'react';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import preset from 'jss-preset-default';
import { MuiThemeProvider } from 'material-ui/styles';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
import theme from './theme';

export default function (
  App,
) {
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry(
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
