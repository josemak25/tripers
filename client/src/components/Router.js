import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Driver from './Driver';

const Navigator = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Driver} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigator;
