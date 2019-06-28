import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Driver from './Driver';
import Dashboard from './Dashboard';

const Navigator = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Driver} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigator;
