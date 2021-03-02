import React from 'react';
import styled from 'styled-components';
import {HistoryItem} from './HistoryItem/HistoryItem';

const HistoryStyles = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  overflow-y: hidden;
  position: absolute;
  top: 50px;
  background: #f6f6f6;
  ::-webkit-scrollbar {
    display: none;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Cross = styled.div`
  position: absolute;
  right: -1px;
  cursor: pointer;
  background: #f6f6f6;
  width: 51px;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 51px;
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

const Wrap = styled.div``;

export const HistoryQuery = () => {
  const historyData = [
    {
      id: '1',
      query: `{
        "query": {
          "action": "some",
          "id": "23"
        }
      }`,
      status: true,
    },
    {
      id: '2',
      query: `{
        "query": {
          "action": "some",
          "id": "23"
        }
      }`,
      status: false,
    },
    {
      id: '3',
      query: `{
        "query": {
          "action": "some",
          "id": "23"
        }
      }`,
      status: false,
    },
    {
      id: '4',
      query: `{
        "query": {
          "action": "some",
          "id": "23"
        }
      }`,
      status: true,
    },
    {
      id: '5',
      query: `{
        "query": {
          "action": "some",
          "id": "23"
        }
      }`,
      status: false,
    },
    {
      id: '5',
      query: `{
        "query": {
          "action": "some",
          "id": "23"
        }
      }`,
      status: false,
    },
    {
      id: '5',
      query: `{
        "query": {
          "action": "some",
          "id": "23"
        }
      }`,
      status: false,
    },
    {
      id: '5',
      query: `{
        "query": {
          "action": "some",
          "id": "23"
        }
      }`,
      status: false,
    },
    {
      id: '5',
      query: `{
        "query": {
          "action": "some",
          "id": "23"
        }
      }`,
      status: false,
    },
  ];
  return (
    <Wrap>
      <HistoryStyles>
        {historyData.map((history) => (
          <HistoryItem data={history} key={history.id} />
        ))}
      </HistoryStyles>
      <Cross>
        <div className="shadow"></div>
        <img src="/icons/cross.svg" alt="cross" />
      </Cross>
    </Wrap>
  );
};
