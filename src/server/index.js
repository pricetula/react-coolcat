/* eslint-disable function-paren-newline */
import winston from 'winston';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import express from 'express';
import cors from 'cors';
import cookiesMiddleware from 'universal-cookie-express';
import { CookiesProvider } from 'react-cookie';
import sagaServerPort from '../common/redux/sagaServerPort';
import App from '../common/component/App';
import combinedSagas from '../common/sagas';
import muiServerProvider from '../common/mui/serverProvider';

function renderHTML(
  component,
  data,
) {
  const Mui = muiServerProvider(
    component,
  );

  return `
    <!doctype html>
    <html>
      <body>
        <div id="react-root">${Mui.Component}</div>
        <style id="jss-server-side">${Mui.css}</style>
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
  cors(
  ),
);

app.use(
  express.static(
    'dist',
  ),
);

app.use(
  cookiesMiddleware(
  ),
);

const port = process.env.PORT || 8080;

const url = `http://localhost:${port}`;

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
          <CookiesProvider>
            <App />
          </CookiesProvider>
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

    // NOTE Read more on why we need to render the saga twice one server to make it work
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
