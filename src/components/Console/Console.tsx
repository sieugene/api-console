import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {runQuery} from '../../store/actions/console';
import {AppState} from '../../store/reducers';
import {ConsoleState} from '../../store/reducers/console';
import {Button} from '../Button/Button';
import {JsonEditor} from '../JsonEditor/JsonEditor';
import {ResizablePanels} from '../ResizablePanels/ResizablePanels';

import {ReactComponent as FormatIcon} from './icons/format.svg';

const ConsoleWrap = styled.div`
  background: #ffffff;
  padding: 15px;
  .panel-container {
    position: relative;
    z-index: 1;
  }
  .panel {
    border: none;
    background: #ffffff;
    border: ${(props: {error: boolean; isbeatify: boolean}) => (props.error ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.2)')};
    box-sizing: border-box;
    box-shadow: ${(props) => (props.error ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : 'none')};
    border-radius: 5px;
    padding: 0px;
    height: 75vh;
  }
  .resizer {
    background: none;
  }
  .resizer.active {
    background: #e6e6e666;
  }
  width: 100%;
  span {
    font-family: Fira Code;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
  }
  br {
    display: ${(props) => (props.isbeatify ? 'block' : 'none')};
  }
`;

const FooterStyle = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 15px;
  @media (max-width: 768px) {
    overflow-x: auto;
    div{
      padding-right: 20px;
    }
  }
  .link a {
    text-decoration: none;
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;
    color: #999999;

    -webkit-transition: color1s;
    -moz-transition: color 1s;
    -o-transition: color 1s;
    transition: color 1s;
    &:hover {
      color: #676761;
    }
  }
  .format {
    cursor: pointer;
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;
    color: #0d0d0d;
    @media (max-width: 768px) {
      font-size: 13px;
    }
    &:focus {
      border: 2px solid #45a5ff;
    }
    &:hover {
      color: #0055fb;
      .format-icon {
        path {
          stroke: #0055fb;
        }
      }
    }
    .format-icon {
      margin-right: 11px;
    }
  }
`;

export const Console = () => {
  const dispatch = useDispatch();
  const {query, error, loading, response} = useSelector<AppState, ConsoleState>((state) => state.console);
  const [isbeatify, setisbeatify] = useState(false);
  const [jsonValidateError, setjsonValidateError] = useState<string | null>(null);
  const errorCondition = (jsonValidateError && jsonValidateError.length && true) || error;
  const showError = jsonValidateError?.length ? jsonValidateError : response;
  const setError = (error: string | null): void => {
    setjsonValidateError(error ? JSON.stringify({error}) : error);
  };
  useEffect(() => {
    if (loading) {
      setjsonValidateError(null);
    }
  }, [loading]);

  const execute = () => {
    dispatch(runQuery(query));
  };
  const beautify = () => {
    setisbeatify(!isbeatify);
  };

  return (
    <>
      <ConsoleWrap error={errorCondition} isbeatify={isbeatify}>
        <ResizablePanels>
          <JsonEditor setError={setError} value={query} id={'edit'} />
          <JsonEditor value={showError} readonly={true} id={'notedit'} />
        </ResizablePanels>
      </ConsoleWrap>
      <FooterStyle>
        <div onClick={execute}>
          <Button loading={loading} disabled={loading}>
            Отправить
          </Button>
        </div>

        <div className="link">
          <a href="https://github.com/sieugene" target="_blank" rel="noreferrer">
            @sieugene
          </a>
        </div>
        <div className="format" onClick={beautify}>
          <FormatIcon className="format-icon" />
          Форматировать
        </div>
      </FooterStyle>
    </>
  );
};
