import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { AuthRoute } from './router';
import NotFound from '../pages/notFound';
import Login from '../pages/login';
import MineHome from '../pages/mine/home';

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect exact from="/" to="/mine" />
        </Route>
        <AuthRoute path="/mine">
          <MineHome />
        </AuthRoute>
        <Route path="/login" component={Login} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
