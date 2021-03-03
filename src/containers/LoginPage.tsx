import React, {FC, useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

import {authenticate} from '../store/actions/index';
import {LoginForm} from '../components/Forms/LoginForm/LoginForm';

import {LoginValues} from '../store/constants';
import {useLoginForm} from '../components/Forms/LoginForm/hooks/useLoginForm';

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
  const dispatch = useDispatch();
  const [disableForm, setdisableForm] = useState(false);
  const {isFetching, error} = useLoginForm();

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
      <LoginForm onSubmit={onSubmit} validate={validate} loading={isFetching} disabled={disableForm} requestError={error} />
    </Wrapper>
  );
};

export default LoginPage;
