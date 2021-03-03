import {AppState} from '.';
import {
  CLEAR_HISTORY,
  ConsoleActions,
  DELETE_HISTORY,
  ERROR_FETCHING_QUERY,
  FORMAT_TEXT,
  HistoryType,
  RUN_HISTORY,
  RUN_QUERY,
  SET_HISTORY,
  SET_QUERY_TEXT,
  SET_RESPONSE,
  START_FETCHING_QUERY,
  STOP_FETCHING_QUERY,
  SUCCESS_FETCHING_QUERY,
} from './../constants/console';

export type ConsoleState = {
  data: HistoryType[];
  loading: boolean;
  error: boolean;
  query: string;
  response: string;
};
export const initialState: ConsoleState = {
  query: '',
  data: [],
  loading: false,
  error: false,
  response: '',
};

const arrayCopy = (arr: HistoryType[]): HistoryType[] => {
  const copy = JSON.stringify(arr);
  return JSON.parse(copy);
};

export const ConsoleReducer = (state = initialState, action: ConsoleActions): ConsoleState => {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case DELETE_HISTORY: {
      return {
        ...state,
        data: arrayCopy(state.data).filter((history) => history.id !== action.payload.id),
      };
    }
    case SET_QUERY_TEXT: {
      return {
        ...state,
        query: action.payload,
      };
    }
    case RUN_HISTORY:
      return {
        ...state,
      };
    case RUN_QUERY: {
      return {
        ...state,
      };
    }
    case SET_RESPONSE: {
      return {
        ...state,
        response: action.payload,
      };
    }
    case START_FETCHING_QUERY: {
      return {
        ...state,
        loading: true,
      };
    }
    case STOP_FETCHING_QUERY: {
      return {
        ...state,
        loading: false,
      };
    }
    case ERROR_FETCHING_QUERY: {
      return {
        ...state,
        error: true,
      };
    }
    case SUCCESS_FETCHING_QUERY: {
      return {
        ...state,
        error: false,
      };
    }
    case CLEAR_HISTORY: {
      return {
        ...state,
        data: [],
      };
    }
    case FORMAT_TEXT: {
      return {
        ...state,
      };
    }
    default:
      // for checkout all uses actions
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x: never = action;
      return state;
  }
};

/* Selectors */
export const getHistory = (state: AppState, id: string) => state.console.data.find((history) => history.id === id);

export default ConsoleReducer;
