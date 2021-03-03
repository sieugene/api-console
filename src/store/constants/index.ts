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
  payload: {history: any};
};

export type ErrorPayload = {
  explain: string;
  id: string;
  request?: {
    action: string;
    login: string;
    passwd: string;
    sublogin: undefined | string;
  };
};
export const AUTHENTICATE_FAIL = 'AUTHENTICATE_FAIL';
export type AuthenticateFailAction = {
  type: typeof AUTHENTICATE_FAIL;
  payload?: ErrorPayload;
};

export const AUTHENTICATE_LOGOUT = 'AUTHENTICATE_LOGOUT';
export type AuthenticateLogoutAction = {
  type: typeof AUTHENTICATE_LOGOUT;
};

export const AUTHENTICATE_STOP_FETCHING = 'AUTHENTICATE_STOP_FETCHING';
export type AuthenticateStopFetchingAction = {
  type: typeof AUTHENTICATE_STOP_FETCHING;
};

export type AuthActions =
  | AuthenticateAction
  | AuthenticateSuccessAction
  | AuthenticateCheckAction
  | AuthenticateFailAction
  | AuthenticateLogoutAction
  | AuthenticateStopFetchingAction;
