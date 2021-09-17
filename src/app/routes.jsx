import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '../components/pages/Home/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
