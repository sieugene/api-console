import React, {FC, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

import {authenticate} from '../store/actions/index';
import {LoginForm} from '../components/Forms/LoginForm/LoginForm';

import {AppState} from '../store/reducers';
import {LoginValues} from '../store/constants';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

const LoginPage: FC = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const loading = useSelector((state: AppState) => state.auth.loading);
  const isLoggedIn = useSelector((state: AppState) => !!state.auth.sessionKey?.length);
  const [disableForm, setdisableForm] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn, history]);

  function onSubmit({login, sublogin, password}: LoginValues) {
    dispatch(
      authenticate({
        login,
        sublogin,
        password,
      })
    );
  }

  const disableButtonForm = useCallback((errors) => {
    if (Object.values(errors).length) {
      setdisableForm(true);
    } else {
      setdisableForm(false);
    }
  }, []);

  const validate = (values: LoginValues) => {
    const errors: any = {};
    if (!values.login) {
      errors.login = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    }
    disableButtonForm(errors);

    return errors;
  };

  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="" />
      <LoginForm onSubmit={onSubmit} validate={validate} loading={loading} disabled={disableForm} requestError={''} />
    </Wrapper>
  );
};

export default LoginPage;
