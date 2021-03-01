export const AUTHENTICATE = 'AUTHENTICATE';
export type LoginValues = {
  login: string;
  password: string;
  sublogin: string;
};
export type AuthenticateAction = {
  type: typeof AUTHENTICATE;
  payload: LoginValues;
};
export type SuccessPayload = {
  sessionKey: string;
  login: string;
  sublogin: string;
};

export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export type AuthenticateSuccessAction = {
  type: typeof AUTHENTICATE_SUCCESS;
  payload: SuccessPayload;
};

export const AUTHENTICATE_CHECK = 'AUTHENTICATE_CHECK';
export type AuthenticateCheckAction = {
  type: typeof AUTHENTICATE_CHECK;
};

export const AUTHENTICATE_FAIL = 'AUTHENTICATE_FAIL';
export type AuthenticateFailAction = {
  type: typeof AUTHENTICATE_FAIL;
};

export const AUTHENTICATE_LOGOUT = 'AUTHENTICATE_LOGOUT';
export type AuthenticateLogoutAction = {
  type: typeof AUTHENTICATE_LOGOUT;
};

export type AuthActions =
  | AuthenticateAction
  | AuthenticateSuccessAction
  | AuthenticateCheckAction
  | AuthenticateFailAction
  | AuthenticateLogoutAction;
