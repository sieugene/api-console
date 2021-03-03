import {combineReducers} from 'redux';
import {ConsoleReducer as console} from './console';
import {AuthReducer as auth} from './auth';

// export type AppState = {
//   [T in keyof typeof RootReducer]: ReturnType<typeof RootReducer[T]>;
// };

export const RootReducer = combineReducers({
  auth,
  console,
});

export type AppState = ReturnType<typeof RootReducer>;
