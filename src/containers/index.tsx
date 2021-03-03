import React, {FC} from 'react';
import {Route, Switch} from 'react-router-dom';
import ConsolePage from './ConsolePage';
import LoginPage from './LoginPage';

export const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/console">
        <ConsolePage />
      </Route>
    </Switch>
  );
};
