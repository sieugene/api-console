import {
  AUTHENTICATE,
  AUTHENTICATE_FAIL,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_LOGOUT,
  AuthenticateSuccessAction,
  SuccessPayload,
  AUTHENTICATE_CHECK,
  LoginValues,
  AuthenticateAction,
  AuthActions,
} from './../constants/index';

export function authenticate(payload: LoginValues): AuthenticateAction {
  return {
    type: AUTHENTICATE,
    payload,
  };
}

export function authenticateSuccess(payload: SuccessPayload): AuthenticateSuccessAction {
  return {
    type: AUTHENTICATE_SUCCESS,
    payload,
  };
}

export function authenticateFailure(): AuthActions {
  return {
    type: AUTHENTICATE_FAIL,
  };
}

export function authenticateCheck(): AuthActions {
  return {
    type: AUTHENTICATE_CHECK,
  };
}

export function logout(): AuthActions {
  return {
    type: AUTHENTICATE_LOGOUT,
  };
}
