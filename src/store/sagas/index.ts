import {fork} from 'redux-saga/effects';
import {all} from '@redux-saga/core/effects';

import login from './auth';

export default function* root() {
  yield all([fork(login)]);
}
