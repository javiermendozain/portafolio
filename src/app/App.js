/* eslint-disable react/jsx-boolean-value */
// Dependencies
import React from 'react';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/container/Login/Login';

// Routes
import routes from './entry/routes';
import routerHome from './entry/routerHome';

export default ({ server, location, context }) => {
  const routesMap = routes.map((route, i) => <Route key={i} {...route} />);

  // Client Router
  let router = (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} exact = {true} />
          <Route path='/' component={routerHome} exact = {false} />
        </Switch>
      </BrowserRouter>
    </div>
  );

  // Server Router
  if (server) {
    router = (
      <StaticRouter location={location} context={context}>
        <Switch>
          {routesMap}
        </Switch>
      </StaticRouter>
    );
  }

  return (
    <div>
      {router}
    </div>
  );
};
