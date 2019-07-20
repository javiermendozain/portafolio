
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../global/components/layout/Layout/Layout';
import CheckLog from '../global/components/checkLog';

// Routes
import routes from './routes';

export default () => {
  const routesMap = routes.map((route, i) => <Route key={i} {...route} />);

  // Client Router
  const router = (
    <CheckLog>
      <BrowserRouter>
        <Layout>
          <Switch>
            {routesMap}
          </Switch>
        </Layout>
      </BrowserRouter>
    </CheckLog>
  );

  return router;
};
