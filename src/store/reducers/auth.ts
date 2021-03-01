import {handleActions} from 'redux-actions';

import {ActionTypes} from '../constants';

export type AuthState = {
  loading: boolean;
  sessionKey: null | string;
  login: null | string;
  sublogin: null | string;
};
export const initialState: AuthState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
};

const AuthReducer = handleActions(
  {
    [ActionTypes.AUTHENTICATE]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [ActionTypes.AUTHENTICATE_SUCCESS]: (state, {payload}) => {
      return {
        ...state,
        loading: false,
        sessionKey: payload.sessionKey,
        login: payload.login,
        sublogin: payload.sublogin,
      };
    },
    [ActionTypes.AUTHENTICATE_FAILURE]: (state) => {
      return {
        ...state,
        sessionKey: null,
        login: null,
        sublogin: null,
      };
    },
    [ActionTypes.LOGOUT]: (state) => {
      return {
        ...state,
        loading: false,
        sessionKey: null,
      };
    },
  },
  initialState
);
export default AuthReducer;
