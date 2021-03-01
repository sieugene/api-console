import {
  AUTHENTICATE,
  AUTHENTICATE_FAIL,
  AUTHENTICATE_LOGOUT,
  AUTHENTICATE_SUCCESS,
  AuthActions,
  AUTHENTICATE_CHECK,
} from './../constants/index';

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

export const AuthReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        loading: true,
      };
    case AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        sessionKey: action.payload.sessionKey,
        login: action.payload.login,
        sublogin: action.payload.sublogin,
      };
    }
    case AUTHENTICATE_FAIL:
      return {
        ...state,
        sessionKey: null,
        login: null,
        sublogin: null,
      };
    case AUTHENTICATE_LOGOUT: {
      return {
        ...state,
        loading: false,
        sessionKey: null,
      };
    }
    case AUTHENTICATE_CHECK: {
      return state;
    }
    default:
      // eslint-disable-next-line no-case-declarations
      const x: never = action;
      return state;
  }
};

export default AuthReducer;
