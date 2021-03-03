import {fork} from 'redux-saga/effects';
import {all} from '@redux-saga/core/effects';

import login from './auth';
import console from './console';

export default function* root(): Generator {
  yield all([fork(login)]);
  yield all([fork(console)]);
}
