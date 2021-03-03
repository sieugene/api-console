import React, {FC, useEffect} from 'react';
import styled from 'styled-components';

const Notification = styled.div`
  position: absolute;
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  background: #f6f6f6;
  border-radius: 5px;
  width: 89px;
  height: 20px;
  padding: 5px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: #0d0d0d;

   {
    -webkit-animation: action 3s alternate;
    animation: action 3s alternate;
  }
  @-webkit-keyframes action {
    0% {
      transform: translateY(0);
    }
    50% {
      opacity: 0.6;
    }
    100% {
      transform: translateY(-50px);
    }
  }
  @keyframes action {
    0% {
      transform: translateY(0);
    }
    50% {
      opacity: 0.6;
    }
    100% {
      transform: translateY(-50px);
    }
  }
`;
type Props = {
  unsubNotificate: () => NodeJS.Timeout;
  reset: () => void;
};

export const NotificationCopy: FC<Props> = React.memo(({unsubNotificate, reset}) => {
  useEffect(() => {
    let timeout = unsubNotificate();
    return () => {
      clearTimeout(timeout);
      reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unsubNotificate]);
  return (
    <>
      {' '}
      <Notification>Скопировано</Notification>
    </>
  );
});
