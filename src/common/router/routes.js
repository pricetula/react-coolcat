import App from '../component/App';
import Home from '../component/Home';
import Todo from '../component/Todo';
import Simple from '../component/Simple';

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
    ],
  },
];

export default routes;
