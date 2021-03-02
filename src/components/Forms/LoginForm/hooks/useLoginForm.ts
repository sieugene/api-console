import {useHistory} from 'react-router-dom';
import {AuthState} from './../../../../store/reducers/auth';
import {useEffect} from 'react';
import {AppState} from '../../../../store/reducers';
import {useSelector} from 'react-redux';

export const useLoginForm = () => {
  const {loading, error, sessionKey, login, sublogin} = useSelector<AppState, AuthState>((state) => state.auth);
  const isLoggedIn = !!sessionKey?.length;

  const history = useHistory();
  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn, history]);

  return {
    isFetching: loading,
    data: {
      login,
      sublogin,
    },
    error,
  };
};
