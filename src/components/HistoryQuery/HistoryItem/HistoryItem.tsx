import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {HistoryDropdown} from '../HistoryDropdown/HistoryDropdown';
import {NotificationCopy} from '../NotificationCopy/NotificationCopy';

const HistoryItemStyle = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 133px;
  height: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  .name {
    margin-right: 11px;
    margin-left: 5px;
  }
  justify-content: space-between;
  margin-right: 10px;
`;
const Wrapper = styled.div`
  position: relative;
  width: auto;
  display: inline-block;
`;

const StatusColored = styled.div`
  width: 10px;
  height: 10px;
  background: ${(props) => (props.color === 'green' ? `#30b800` : `#CF2C00`)};
  border: ${(props) => (props.color === 'green' ? `1px solid rgba(0, 0, 0, 0.2)` : `1px solid rgba(0, 0, 0, 0.2)`)};
  box-sizing: border-box;
  border-radius: 50%;
`;

const Dots = styled.img`
  cursor: pointer;
`;
type Props = {
  data: {
    query: string;
    status: boolean;
    id: string;
  };
};
export const HistoryItem: FC<Props> = ({data}) => {
  const beautify = (query: string) => {
    const format = JSON.parse(query);
    return JSON.stringify(format, null, '\t');
  };
  const createNameQuery = (query: string) => {
    return JSON.parse(query)?.query?.action ?? '';
  };

  const [dropdown, setdropdown] = useState(false);
  const toggle = () => {
    setdropdown(!dropdown);
  };
  const [notificate, setnotificate] = useState(false);
  const offNotificate = () => {
    setnotificate(false);
  };
  const copy = () => {
    offNotificate();
    navigator.clipboard.writeText(data.query);
    setdropdown(false);
    setnotificate(true);
  };
  const animate = () => {
    return setTimeout(() => {
      offNotificate();
      console.log('steal worked!');
    }, 2600);
  };
  const deleteItem = () => {
    console.log('was deleted');
    setdropdown(false);
  };
  const runItem = () => {
    console.log('was run');
    setdropdown(false);
  };

  return (
    <Wrapper>
      <HistoryItemStyle>
        {notificate && <NotificationCopy unsubNotificate={animate} reset={offNotificate} />}
        <StatusColored color={data.status ? 'green' : 'red'} />

        <div className="name">{createNameQuery(data.query)}</div>

        <Dots src="/icons/dots.svg" alt="dots" onClick={toggle} />
      </HistoryItemStyle>
      <HistoryDropdown open={dropdown} copy={copy} deleteItem={deleteItem} run={runItem} />
    </Wrapper>
  );
};