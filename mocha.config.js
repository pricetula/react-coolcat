/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import register from 'ignore-styles';
import {
  JSDOM,
} from 'jsdom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure(
  {
    adapter: new Adapter(
    ),
  },
);

const jsdom = new JSDOM(
  '<!doctype html><html><body></body></html>',
);

const { window } = jsdom;

function copyProps(
  src,
  target,
) {
  const props = Object.getOwnPropertyNames(
    src,
  )
    .filter(
      prop => typeof target[prop] === 'undefined',
    )
    .reduce(
      (
        result,
        prop,
      ) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(
          src,
          prop,
        ),
      }),
      {},
    );
  Object.defineProperties(
    target,
    props,
  );
}

register(
  [
    '.css',
    '.png',
  ],
);

global.chai = chai;

// global.window = window;

global.document = window.document;

global.navigator = {
  userAgent: 'node.js',
};

copyProps(
  window,
  global,
);
