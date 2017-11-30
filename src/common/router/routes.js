import App from '../component/App';
import Home from '../component/Home';
import Todo from '../component/Todo';
import Simple from '../component/Simple';
import Counter from '../component/Counter';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/todo',
        component: Todo,
      },
      {
        path: '/simple',
        component: Simple,
      },
      {
        path: '/counter',
        component: Counter,
      },
    ],
  },
];

export default routes;

/*
import App from '../component/App';
import Home from '../component/Home';
import Todo from '../component/Todo';
import Simple from '../component/Simple';
import Counter from '../component/Counter';

//splitting
import loadable from 'loadable-components';
const Home = loadable(
  (
  ) => import('../component/Home')
);
const Todo = loadable(
  (
  ) => import('../component/Todo')
);
const Simple = loadable(
  (
  ) => import('../component/Simple')
);
const Counter = loadable(
  (
  ) => import('../component/Counter')
);
*/
