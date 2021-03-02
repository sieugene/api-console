import React, {FC} from 'react';
import styled from 'styled-components';
import smile from '../../../../assets/images/meh.svg';
import {ErrorPayload} from '../../../../store/constants';

const ErrorFormStyle = styled.div`
  background: rgba(207, 44, 0, 0.1);
  border-radius: 5px;
  display: flex;
  height: 70px;
  padding-top: 15px;
  padding-left: 12px;
  padding-bottom: 10px;
  padding-right: 12px;
  margin-bottom: 20px;
  .smile {
    position: relative;
    top: 5px;
    img {
      max-height: 20px;
      max-width: 20px;
    }
  }
  .info__error {
    margin-left: 10px;
    .title {
      font-family: SF Pro Text;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      display: flex;
      align-items: center;
      color: #cf2c00;
      margin: 0;
      padding: 0;
    }
    .info {
      font-family: SF Pro Text;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #cf2c00;
      opacity: 0.5;
      margin: 0;
      padding: 0;
    }
  }
`;
type Props = {
  info: ErrorPayload | null;
};

export const ErrorForm: FC<Props> = ({info}) => {
  return (
    <>
      {info && (
        <ErrorFormStyle>
          <div className="smile">
            <img src={smile} alt="smile" />
          </div>
          <div className="info__error">
            <h3 className="title">Вход не вышел</h3>
            <p className="info">{info && JSON.stringify({id: info?.id, explain: info?.explain})}</p>
          </div>
        </ErrorFormStyle>
      )}
    </>
  );
};
