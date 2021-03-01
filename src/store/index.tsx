import {createStore, applyMiddleware, combineReducers, Middleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
};

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  interface Stored extends Store {
    runSagaTask: () => void;
  }
  const store: Stored = createStore(
    combineReducers({
      auth: persistReducer(persistConfig, rootReducer.auth),
    }),
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  let persistor = persistStore(store);

  store.runSagaTask = () => {
    sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return {
    store,
    persistor,
  };
}

export default configureStore;
