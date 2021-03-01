import login from '../reducers/auth';

const RootReducer = {
  auth: login,
};
export type AppState = {
  [T in keyof typeof RootReducer]: ReturnType<typeof RootReducer[keyof typeof RootReducer]>;
};

export default RootReducer;
