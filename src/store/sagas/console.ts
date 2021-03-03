import {put} from 'redux-saga/effects';
import {takeLatest, all} from '@redux-saga/core/effects';
import {SagaIterator} from '@redux-saga/core';

import api from '../../helpers/sendsay';

import {RUN_QUERY, runQueryAction, HistoryType, Query, runHistoryAction, RUN_HISTORY} from '../constants/console';
import {startFetchingQuery, stopFetchingQuery, errorFetchingQuery, successFetchingQuery, setHistory, setReponse} from '../actions/console';

// Utils
import {v4 as uuidv4} from 'uuid';

const createQueryHistory = (query: object, isFailure: boolean): HistoryType => {
  return {
    query: toJSON(query),
    id: uuidv4(),
    status: !isFailure,
  };
};
const fromJsonToObj = (query: Query): object => {
  return JSON.parse(query);
};
const toJSON = (query: object): string => {
  return JSON.stringify(query, null, '\t');
};

export function* runQuerySaga(action: runQueryAction): Generator {
  const {payload} = action;
  const format = fromJsonToObj(payload);
  try {
    yield put(startFetchingQuery());
    const result = yield api.sendsay.request({
      ...format,
    });
    yield put(setReponse(toJSON(result as Promise<object>)));
    yield put(setHistory(createQueryHistory(format, false)));
    yield put(successFetchingQuery());
  } catch (error) {
    yield put(setReponse(toJSON(error)));
    yield put(setHistory(createQueryHistory(format, true)));
    yield put(errorFetchingQuery());
  } finally {
    yield put(stopFetchingQuery());
  }
}

export function* runHistorySaga(action: runHistoryAction): Generator {
  const {payload} = action;
  const format = fromJsonToObj(payload.query);
  try {
    yield put(startFetchingQuery());
    const result = yield api.sendsay.request({
      ...format,
    });
    yield put(setReponse(toJSON(result as Promise<object>)));
    // yield put(setHistory(createQueryHistory(format, false)));
    yield put(successFetchingQuery());
  } catch (error) {
    yield put(setReponse(toJSON(error)));
    // yield put(setHistory(createQueryHistory(format, true)));
    yield put(errorFetchingQuery());
  } finally {
    yield put(stopFetchingQuery());
  }
}

export default function* root(): SagaIterator {
  yield all([takeLatest(RUN_QUERY, runQuerySaga)]);
  yield all([takeLatest(RUN_HISTORY, runHistorySaga)]);
}
