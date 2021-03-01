import {AuthReducer} from './auth';

const RootReducer = {
  auth: AuthReducer,
};
export type AppState = {
  [T in keyof typeof RootReducer]: ReturnType<typeof RootReducer[keyof typeof RootReducer]>;
};

export default RootReducer;
