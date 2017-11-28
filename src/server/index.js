/* eslint-disable function-paren-newline */
import winston from 'winston';
// import path from 'path';
// import toPlainObject from 'lodash/toPlainObject';
// import stringify from 'json-stringify-safe';
import axios from 'axios';
import React from 'react';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import express from 'express';
import cors from 'cors';
import appComponent from '../common/component/app';

function renderHTML(
  component,
  data,
) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
      </head>
      <body>
        <div id="react-root">${component}</div>
        <script>
          window.__PRELOADED_STATE__=${JSON.stringify(data).replace(/</g, '\\u003c')}
        </script>
        <script src="bundle.js" defer></script>
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
  '/',
  (
    req,
    res,
  ) => {
    axios.get(
      '/posts',
    )
      .then(
        (
          response,
        ) => {
          res.status(
            200,
          ).send(
            renderHTML(
              renderToString(
                // passing state through props not sure here
                <StaticRouter location={req.url} context={{}}>
                  {
                    appComponent(
                    )
                  }
                </StaticRouter>,
              ),
              // Pass object data to preloaded state so that it will be available to component
              { appState: response.data },
            ),
          );
        },
      )
      .catch(
        (
          error,
        ) => {
          winston.error(
            error,
          );
        },
      );
  },
);

app.listen(
  port,
);

winston.info(
  `Server listening on ${url}`,
);
