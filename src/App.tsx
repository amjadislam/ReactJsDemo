import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from 'routes/index';
import privateRoutes from 'routes/private.index';
import AuthRoute from 'routes/AuthRoute';
import PublicRoute from 'routes/PublicRoute';
import NotFound from 'components/notFound/NotFound';
import 'App.css';
import CpToast from 'components/controls/Toast';

function App() {
  document.title = 'Casting pax';
  return (
    <div className="App">
      <CpToast />
      <div>
        <Switch>
          {routes &&
            routes.map((route, key) => <PublicRoute key={key} path={route.path} component={route.component} />)}
          {privateRoutes &&
            privateRoutes.map((route, key) => <AuthRoute key={key} path={route.path} component={route.component} />)}
          <Redirect exact from="/" to="/login" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
