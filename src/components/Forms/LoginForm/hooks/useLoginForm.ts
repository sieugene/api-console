import {useHistory} from 'react-router-dom';
import {AuthState, isAuth} from './../../../../store/reducers/auth';
import {useEffect} from 'react';
import {AppState} from '../../../../store/reducers';
import {useSelector} from 'react-redux';

export const useLoginForm = () => {
  const {loading, error, login, sublogin} = useSelector<AppState, AuthState>((state) => state.auth);
  const isLoggedIn = useSelector<AppState>((state) => isAuth(state));

  const history = useHistory();
  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    } else {
      history.push('/');
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
