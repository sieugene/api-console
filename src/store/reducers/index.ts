import {AuthState} from './auth';
import login from '../reducers/auth';

const RootReducer = {
  ...login,
};

export type AppState = {
  auth: AuthState;
};

export default RootReducer;
