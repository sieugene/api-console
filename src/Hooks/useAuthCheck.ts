import {useHistory} from 'react-router-dom';
import {isAuth} from './../store/reducers/auth';
import {AppState} from './../store/reducers/index';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authenticateCheck} from '../store/actions';

export const useAuthCheck = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector<AppState>((state) => isAuth(state));
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/');
    } else {
      dispatch(authenticateCheck({history}));
    }
  }, [isLoggedIn, dispatch, history]);
};
