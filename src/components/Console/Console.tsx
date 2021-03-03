import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {setQueryText, runQuery} from '../../store/actions/console';
import {AppState} from '../../store/reducers';
import {ConsoleState} from '../../store/reducers/console';
import {Button} from '../Button/Button';
import {ResizablePanels} from '../ResizablePanels/ResizablePanels';

const ConsoleWrap = styled.div`
  background: #ffffff;
  padding: 15px;
  .panel {
    border: none;
    background: #ffffff;
    border: ${(props: {error: boolean}) => (props.error ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.2)')};
    box-sizing: border-box;
    box-shadow: ${(props: {error: boolean}) => (props.error ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : 'none')};
    border-radius: 5px;
    padding: 0px;
  }
  .resizer {
    background: none;
  }
  .resizer.active {
    background: #e6e6e6;
  }
  width: 100%;
  .query-textarea {
    resize: none;
    border: none;
    height: 100%;
    width: 100%;
    padding: 10px;
    margin: 0;
    &:focus {
      outline: none;
    }
  }
`;

const ResponseTextArea = styled.textarea`
  resize: none;
  border: none;
  height: 100%;
  width: 100%;
  padding: 10px;
  margin: 0;
  &:focus {
    outline: none;
  }
`;

const FooterStyle = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 15px;
  .link {
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;
    color: #999999;
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
  }
`;

const Format = styled.img`
  margin-right: 11px;
`;

export const Console = () => {
  const dispatch = useDispatch();
  const {query, error, loading, response} = useSelector<AppState, ConsoleState>((state) => state.console);

  const queryOnchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setQueryText(e.currentTarget.value));
  };
  const execute = () => {
    dispatch(runQuery(query));
  };

  return (
    <>
      <ConsoleWrap error={error}>
        <ResizablePanels>
          <textarea className="query-textarea" onChange={queryOnchange} value={query} defaultValue="{}"></textarea>
          <ResponseTextArea defaultValue="{}" value={response} />
        </ResizablePanels>
      </ConsoleWrap>
      <FooterStyle>
        <div onClick={execute}>
          <Button loading={loading} disabled={loading}>
            Отправить
          </Button>
        </div>

        <div className="link">@test</div>
        <div className="format">
          <Format src="/icons/format.svg" alt="" />
          Форматировать
        </div>
      </FooterStyle>
    </>
  );
};
