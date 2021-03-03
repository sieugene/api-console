import {AuthState} from './../../../../store/reducers/auth';

import {AppState} from '../../../../store/reducers';
import {useSelector} from 'react-redux';

export const useLoginForm = () => {
  const {loading, error, login, sublogin} = useSelector<AppState, AuthState>((state) => state.auth);

  return {
    isFetching: loading,
    data: {
      login,
      sublogin,
    },
    error,
  };
};
