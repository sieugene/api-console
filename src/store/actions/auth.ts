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
  ErrorPayload,
  AUTHENTICATE_STOP_FETCHING,
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

export function authenticateFailure(payload?: ErrorPayload): AuthActions {
  return {
    type: AUTHENTICATE_FAIL,
    payload,
  };
}

export function authenticateCheck(payload: {history: any}): AuthActions {
  return {
    type: AUTHENTICATE_CHECK,
    payload,
  };
}

export function logout(): AuthActions {
  return {
    type: AUTHENTICATE_LOGOUT,
  };
}

export function stopFetching(): AuthActions {
  return {
    type: AUTHENTICATE_STOP_FETCHING,
  };
}
