import {
  AUTHENTICATE,
  AUTHENTICATE_FAIL,
  AUTHENTICATE_LOGOUT,
  AUTHENTICATE_SUCCESS,
  AuthActions,
  AUTHENTICATE_CHECK,
  ErrorPayload,
  AUTHENTICATE_STOP_FETCHING,
} from './../constants/index';

export type AuthState = {
  loading: boolean;
  sessionKey: null | string;
  login: null | string;
  sublogin: null | string;
  error: ErrorPayload | null;
};
export const initialState: AuthState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
  error: null,
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
        error: action?.payload ?? null,
      };
    case AUTHENTICATE_LOGOUT: {
      return {
        ...state,
        sessionKey: null,
      };
    }
    case AUTHENTICATE_CHECK: {
      return {
        ...state,
      };
    }
    case AUTHENTICATE_STOP_FETCHING: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      // eslint-disable-next-line no-case-declarations
      const x: never = action;
      return state;
  }
};

export default AuthReducer;
