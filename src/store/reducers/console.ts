import {
  ConsoleActions,
  DELETE_HISTORY,
  ERROR_FETCHING_QUERY,
  HistoryType,
  RUN_HISTORY,
  RUN_QUERY,
  SET_HISTORY,
  START_FETCHING_QUERY,
  STOP_FETCHING_QUERY,
  SUCCESS_FETCHING_QUERY,
} from './../constants/console';

export type ConsoleState = {
  data: HistoryType[];
  loading: boolean;
  error: boolean;
};
export const initialState: ConsoleState = {
  data: [
    // {
    //   id: '1',
    //   query: `{
    //   "query": {
    //     "action": "some",
    //     "id": "23"
    //   }
    // }`,
    //   status: true,
    // },
    // {
    //   id: '2',
    //   query: `{
    //   "query": {
    //     "action": "some",
    //     "id": "23"
    //   }
    // }`,
    //   status: false,
    // },
    // {
    //   id: '3',
    //   query: `{
    //   "query": {
    //     "action": "some",
    //     "id": "23"
    //   }
    // }`,
    //   status: false,
    // },
    // {
    //   id: '4',
    //   query: `{
    //   "query": {
    //     "action": "some",
    //     "id": "23"
    //   }
    // }`,
    //   status: true,
    // },
    // {
    //   id: '5',
    //   query: `{
    //   "query": {
    //     "action": "some",
    //     "id": "23"
    //   }
    // }`,
    //   status: false,
    // },
    // {
    //   id: '5',
    //   query: `{
    //   "query": {
    //     "action": "some",
    //     "id": "23"
    //   }
    // }`,
    //   status: false,
    // },
    // {
    //   id: '5',
    //   query: `{
    //   "query": {
    //     "action": "some",
    //     "id": "23"
    //   }
    // }`,
    //   status: false,
    // },
    // {
    //   id: '5',
    //   query: `{
    //   "query": {
    //     "action": "some",
    //     "id": "23"
    //   }
    // }`,
    //   status: false,
    // },
    // {
    //   id: '5',
    //   query: `{
    //   "query": {
    //     "action": "some",
    //     "id": "23"
    //   }
    // }`,
    //   status: false,
    // },
  ],
  loading: false,
  error: false,
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
        data: [...state.data, action.payload],
      };
    case DELETE_HISTORY: {
      return {
        ...state,
        data: arrayCopy(state.data).filter((history) => history.id !== action.payload.id),
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
    default:
      // eslint-disable-next-line no-case-declarations
      const x: never = action;
      return state;
  }
};

export default ConsoleReducer;
