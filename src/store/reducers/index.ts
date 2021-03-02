import {ConsoleReducer} from './console';
import {AuthReducer} from './auth';

const RootReducer = {
  auth: AuthReducer,
  console: ConsoleReducer,
};
export type AppState = {
  [T in keyof typeof RootReducer]: ReturnType<typeof RootReducer[T]>;
};

export default RootReducer;
