import {
  ConsoleActions,
  HistoryType,
  SET_HISTORY,
  DELETE_HISTORY,
  RUN_HISTORY,
  RUN_QUERY,
  START_FETCHING_QUERY,
  STOP_FETCHING_QUERY,
  ERROR_FETCHING_QUERY,
  SUCCESS_FETCHING_QUERY,
  SET_QUERY_TEXT,
  Query,
  SET_RESPONSE,
  CLEAR_HISTORY,
  FORMAT_TEXT,
} from './../constants/console';

export function setHistory(payload: HistoryType): ConsoleActions {
  return {
    type: SET_HISTORY,
    payload,
  };
}

export function deleteHistory(payload: {id: string}): ConsoleActions {
  return {
    type: DELETE_HISTORY,
    payload,
  };
}
export function runHistory(payload: HistoryType): ConsoleActions {
  return {
    type: RUN_HISTORY,
    payload,
  };
}

export function setReponse(payload: Query): ConsoleActions {
  return {
    type: SET_RESPONSE,
    payload,
  };
}
export function setQueryText(payload: Query): ConsoleActions {
  return {
    type: SET_QUERY_TEXT,
    payload,
  };
}

export function runQuery(payload: Query): ConsoleActions {
  return {
    type: RUN_QUERY,
    payload,
  };
}

export function startFetchingQuery(): ConsoleActions {
  return {
    type: START_FETCHING_QUERY,
  };
}

export function stopFetchingQuery(): ConsoleActions {
  return {
    type: STOP_FETCHING_QUERY,
  };
}

export function errorFetchingQuery(): ConsoleActions {
  return {
    type: ERROR_FETCHING_QUERY,
  };
}

export function successFetchingQuery(): ConsoleActions {
  return {
    type: SUCCESS_FETCHING_QUERY,
  };
}

export function clearHistory(): ConsoleActions {
  return {
    type: CLEAR_HISTORY,
  };
}

export function formatText(): ConsoleActions {
  return {
    type: FORMAT_TEXT,
  };
}
