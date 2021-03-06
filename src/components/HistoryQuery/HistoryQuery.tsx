import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {AppState} from '../../store/reducers';
import {HistoryItem} from './HistoryItem/HistoryItem';
import {ConsoleState} from '../../store/reducers/console';
import {clearHistory} from '../../store/actions/console';

const HistoryStyles = styled.div`
  display: flex;
  width: 100%;
  height: 209px;
  overflow-x: scroll;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  overflow-y: hidden;
  position: absolute;
  top: 50px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Cross = styled.div`
  position: absolute;
  right: 0px;
  cursor: pointer;
  background: #f6f6f6;
  width: 51px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50px;
  .shadow {
    border-right: 1px solid #c4c4c4;
    height: 49px;
    display: block;
    width: 15px;
    position: absolute;
    background: linear-gradient(269.93deg, #f6f6f6 0.06%, rgba(246, 246, 246, 0) 99.93%);
    left: -15px;
  }
`;

const Wrap = styled.div`
  .background__overlay {
    background: #f6f6f6;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    height: 50px;
    position: relative;
  }
`;

export const HistoryQuery = ({max = 15}) => {
  const dispatch = useDispatch();
  const {data} = useSelector<AppState, ConsoleState>((state) => state.console);
  const length = data.length > max ? max : data.length;
  const clear = () => {
    dispatch(clearHistory());
  };
  return (
    <Wrap>
      <div className="background__overlay"></div>
      <HistoryStyles>
        {data.map((history, index) => index + 1 <= max && <HistoryItem data={history} key={history.id} isLast={length === index + 1} />)}
      </HistoryStyles>
      <Cross>
        <div className="shadow"></div>
        <img src="/icons/cross.svg" alt="cross" onClick={clear} />
      </Cross>
    </Wrap>
  );
};
