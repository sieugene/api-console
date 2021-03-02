import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import createStore from './store/index';
import LoginPage from './containers/LoginPage';
import ConsolePage from './containers/ConsolePage';

const {store, persistor} = createStore();

const App: FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/console">
              <ConsolePage />
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
