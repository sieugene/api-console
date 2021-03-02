import React, {FC, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import styled from 'styled-components';
import {Console} from '../components/Console/Console';
import {Header} from '../components/Header/Header';
import {HistoryQuery} from '../components/HistoryQuery/HistoryQuery';
import {AppState} from '../store/reducers';
import {isAuth} from '../store/reducers/auth';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ConsolePage: FC = () => {
  const isLoggedIn = useSelector<AppState>((state) => isAuth(state));
  const history = useHistory();
  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn, history]);
  return (
    <>
      <Header />
      <HistoryQuery />
      <Console />
    </>
  );
};

export default ConsolePage;
