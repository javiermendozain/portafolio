
// Components
import Home from '../pages/container/Home/Home';
import NotFound from '../pages/components/NotFount/NotFound';
import HelloWord from '../pages/components/HelloWord/Hello_word';

// Containers
import Blog from '../pages/blog';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/hello',
    component: HelloWord
  },
  {
    path:'/blog',
    component: Blog,
    exact: true
  },
  {
    path: null,
    component: NotFound
  }
];

export default routes;
