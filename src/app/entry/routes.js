
// Components
import Home from '../pages/container/Home/Home';
import NotFound from '../pages/components/NotFount/NotFound';

// Containers
import Blog from '../pages/container/Blog/Blog';
import NewPost from '../pages/container/Blog/newPost';
import viewBlogLayout from '../pages/components/Blog/view-blog-layout';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path:'/blog/newPost',
    component: NewPost
  },
  {
    path:'/blog/:idCategory',
    component: Blog,
    exact: true
  },
  {
    path:'/blog/v/:idPost',
    component: viewBlogLayout,
    exact: true
  },
  {
    path:'/blog',
    component: Blog
  },
  {
    path: null,
    component: NotFound
  }
];

export default routes;
