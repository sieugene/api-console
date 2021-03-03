export const SET_HISTORY = 'SET_HISTORY';
export type HistoryType = {
  id: string;
  query: string;
  status: boolean;
};
export type setHistoryAction = {
  type: typeof SET_HISTORY;
  payload: HistoryType;
};

export const DELETE_HISTORY = 'DELETE_HISTORY';
export type deleteHistoryAction = {
  type: typeof DELETE_HISTORY;
  payload: {
    id: string;
  };
};
export type Query = string;
export const SET_QUERY_TEXT = 'SET_QUERY_TEXT';
export type setQueryTextAction = {
  type: typeof SET_QUERY_TEXT;
  payload: Query;
};

export const SET_RESPONSE = 'SET_RESPONSE';
export type setResponseAction = {
  type: typeof SET_RESPONSE;
  payload: Query;
};

export const RUN_HISTORY = 'RUN_HISTORY';
export type runHistoryAction = {
  type: typeof RUN_HISTORY;
  payload: HistoryType;
};

export const RUN_QUERY = 'RUN_QUERY';
export type runQueryAction = {
  type: typeof RUN_QUERY;
  payload: Query;
};

export const START_FETCHING_QUERY = 'START_FETCHING_QUERY';
export type startFetchingQueryAction = {
  type: typeof START_FETCHING_QUERY;
};

export const STOP_FETCHING_QUERY = 'STOP_FETCHING_QUERY';
export type stopFetchingQueryAction = {
  type: typeof STOP_FETCHING_QUERY;
};

export const ERROR_FETCHING_QUERY = 'ERROR_FETCHING_QUERY';
export type errorFetchingQueryAction = {
  type: typeof ERROR_FETCHING_QUERY;
};

export const SUCCESS_FETCHING_QUERY = 'SUCCESS_FETCHING_QUERY';
export type successFetchingQueryAction = {
  type: typeof SUCCESS_FETCHING_QUERY;
};

export type ConsoleActions =
  | setHistoryAction
  | deleteHistoryAction
  | runHistoryAction
  | runQueryAction
  | startFetchingQueryAction
  | stopFetchingQueryAction
  | errorFetchingQueryAction
  | successFetchingQueryAction
  | setQueryTextAction
  | setResponseAction;
