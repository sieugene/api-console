import {AUTHENTICATE_CHECK, AUTHENTICATE_LOGOUT, AuthenticateAction} from './../constants/index';
import {call, put} from 'redux-saga/effects';
import {takeLatest, all} from '@redux-saga/core/effects';
import {SagaIterator} from '@redux-saga/core';

import api from '../../helpers/sendsay';

import {authenticateSuccess, authenticateFailure} from '../actions/auth';
import {AUTHENTICATE} from '../constants';

export function* authenticateCheckSaga(): Generator {
  try {
    yield api.sendsay.request({
      action: 'pong',
    });
  } catch (error) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga);
    }
  }
}

export function* authenticateSaga(data: AuthenticateAction): Generator {
  const {payload} = data;
  yield api.sendsay
    .login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password,
    })
    .then(() => {
      document.cookie = `sendsay_session=${api.sendsay.session}`;
    })
    .catch((err: any) => {
      document.cookie = '';
      console.log('err', err);
    });

  yield put(
    authenticateSuccess({
      sessionKey: api.sendsay.session,
      login: payload.login,
      sublogin: payload.sublogin,
    })
  );
}

export function* logoutSaga(): Generator {
  yield put(authenticateFailure());
  document.cookie = '';
}

export default function* root(): SagaIterator {
  yield all([
    takeLatest(AUTHENTICATE, authenticateSaga),
    takeLatest(AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(AUTHENTICATE_LOGOUT, logoutSaga),
  ]);
}
