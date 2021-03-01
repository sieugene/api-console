import {createActions} from 'redux-actions';

import {ActionTypes} from '../constants/index';

export const {authenticate, authenticateSuccess, authenticateCheck, authenticateFailure, logout} = createActions<string>({
  [ActionTypes.AUTHENTICATE]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_CHECK]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_SUCCESS]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_FAILURE]: (payload) => payload,
  [ActionTypes.LOGOUT]: (payload) => payload,
});
