/* eslint-disable function-paren-newline */
import winston from 'winston';
// import path from 'path';
// import toPlainObject from 'lodash/toPlainObject';
// import stringify from 'json-stringify-safe';
import axios from 'axios';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import express from 'express';
import cors from 'cors';
import sagaServerPort from '../common/redux/sagaServerPort';
import App from '../common/component/App';
import combinedSagas from '../common/sagas';

function renderHTML(
  component,
  data,
) {
  return `
    <!doctype html>
    <html>
      <body>
        <div id="react-root">${component}</div>
        <script>
          window.__PRELOADEDSTATE__=${JSON.stringify(data).replace(/</g, '\\u003c')}
        </script>
      </body>
    </html>
  `;
}

const app = express(
);

app.use(
  express.static(
    'dist',
  ),
);

app.use(
  cors(
  ),
);

const port = process.env.PORT || 8080;

const url = `http://localhost:${port}`;

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

app.get(
  '*',
  (
    req,
    res,
  ) => {
    const store = sagaServerPort(
    );

    const Component = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>
      </Provider>
    );

    const renderedHtml = () => renderHTML(
      renderToString(
        // passing state through props not sure here
        Component,
      ),
      // Pass object data to preloaded state so that it will be available to component
      Object.assign(
        {},
        store.getState(),
        { appState: [] },
      ),
    );

    store.runSaga(
      combinedSagas,
    )
      .done
      .then(
        () => {
          res.status(
            200,
          ).send(
            renderedHtml(),
          );
        },
      ).catch((e) => {
        res.status(500).send(e.message);
      });

    renderedHtml();
    store.close();
  },
);

app.listen(
  port,
);

winston.info(
  `🌎 >>> Server listening on ${url}`,
);
