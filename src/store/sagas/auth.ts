import {AUTHENTICATE_CHECK, AUTHENTICATE_LOGOUT, AuthenticateAction, AuthenticateCheckAction} from './../constants/index';
import {call, put} from 'redux-saga/effects';
import {takeLatest, all} from '@redux-saga/core/effects';
import {SagaIterator} from '@redux-saga/core';
import Cookies from 'js-cookie';

import api from '../../helpers/sendsay';

import {authenticateSuccess, authenticateFailure, stopFetching} from '../actions/auth';
import {AUTHENTICATE} from '../constants';

export function* authenticateCheckSaga(action: AuthenticateCheckAction): Generator {
  const {payload} = action;
  try {
    yield api.sendsay.request({
      action: 'pong',
    });
    payload.history.push('/console');
  } catch (error) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga);
    }
    payload.history.push('/');
  } finally {
    yield put(stopFetching());
  }
}

export function* authenticateSaga(data: AuthenticateAction): Generator {
  const {payload} = data;
  try {
    yield api.sendsay.login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password,
    });

    Cookies.set('sendsay_session', api.sendsay.session);
    yield put(
      authenticateSuccess({
        sessionKey: api.sendsay.session,
        login: payload.login,
        sublogin: payload.sublogin,
      })
    );
  } catch (error) {
    Cookies.remove('sendsay_session');
    yield put(authenticateFailure(error));
  } finally {
    yield put(stopFetching());
  }
}

export function* logoutSaga(): Generator {
  yield Cookies.remove('sendsay_session');
  yield put(authenticateFailure());
  yield put(stopFetching());
}

export default function* root(): SagaIterator {
  yield all([
    takeLatest(AUTHENTICATE, authenticateSaga),
    takeLatest(AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(AUTHENTICATE_LOGOUT, logoutSaga),
  ]);
}
