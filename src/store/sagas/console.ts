import {formatTextAction, FORMAT_TEXT} from './../constants/console';
import {put} from 'redux-saga/effects';
import {takeLatest, all, select} from '@redux-saga/core/effects';
import {SagaIterator} from '@redux-saga/core';

import api from '../../helpers/sendsay';

import {RUN_QUERY, runQueryAction, HistoryType, Query, runHistoryAction, RUN_HISTORY} from '../constants/console';
import {
  startFetchingQuery,
  stopFetchingQuery,
  errorFetchingQuery,
  successFetchingQuery,
  setHistory,
  setReponse,
  setQueryText,
} from '../actions/console';

// Utils
import {v4 as uuidv4} from 'uuid';
import {AppState} from '../reducers';

const createQueryHistory = (query: object, isFailure: boolean): HistoryType => {
  return {
    query: toJSON(query),
    id: uuidv4(),
    status: !isFailure,
  };
};
const fromJsonToObj = (query: Query): object | undefined => {
  try {
    return JSON.parse(query);
  } catch (error) {
    return undefined;
  }
};
const toJSON = (query: object): string => {
  return JSON.stringify(query, null, 4);
};
const beautify = (text: string): string => {
  try {
    const json = JSON.parse(text);
    return JSON.stringify(json, null, 4);
  } catch (error) {
    throw new Error('Неправильный формат json');
  }
};

export function* runQuerySaga(action: runQueryAction): Generator {
  const {payload} = action;
  const format = fromJsonToObj(payload);
  if (format) {
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
  } else {
    yield put(setReponse('Неправильный формат json'));
    yield put(errorFetchingQuery());
  }
}

export function* runHistorySaga(action: runHistoryAction): Generator {
  const {payload} = action;
  const format = fromJsonToObj(payload.query);
  yield put(setQueryText(payload.query));
  if (format) {
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
  } else {
    yield put(setReponse('Неправильный формат json'));
    yield put(errorFetchingQuery());
  }
}

export function* formatTextSaga(action: formatTextAction): Generator {
  const response = yield select((state: AppState): string => state.console.response);
  const query = yield select((state: AppState): string => state.console.query);
  try {
    yield put(setQueryText(beautify(query as string)));
    yield put(setReponse(beautify(response as string)));
  } catch (error) {
    yield put(setReponse('Неправильный формат json'));
    yield put(errorFetchingQuery());
  }
}

export default function* root(): SagaIterator {
  yield all([takeLatest(RUN_QUERY, runQuerySaga)]);
  yield all([takeLatest(RUN_HISTORY, runHistorySaga)]);
  yield all([takeLatest(FORMAT_TEXT, formatTextSaga)]);
}
