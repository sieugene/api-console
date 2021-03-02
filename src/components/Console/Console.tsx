import React from 'react';
import styled from 'styled-components';
import {Button} from '../Button/Button';
import {ResizablePanels} from '../ResizablePanels/ResizablePanels';

const ConsoleWrap = styled.div`
  background: #ffffff;
  margin-top: 50px;
  padding: 15px;
  .panel {
    border: none;
    background: #ffffff;
    border: ${(props: {error: boolean}) => (props.error ? '1px solid #CF2C00' : '1px solid rgba(0, 0, 0, 0.2)')};
    box-sizing: border-box;
    box-shadow: ${(props: {error: boolean}) => (props.error ? '0px 0px 5px rgba(207, 44, 0, 0.5)' : 'none')};
    border-radius: 5px;
  }
  .resizer {
    background: none;
  }
  .resizer.active {
    background: #e6e6e6;
  }
  width: 100%;
`;

const QueryTextArea = styled.textarea`
  resize: none;
  border: none;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const ResponseTextArea = styled.textarea`
  resize: none;
  border: none;
  height: 100%;
  width: 100%;
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
  const execute = () => {
    console.log('run');
  };
  const error = false;
  return (
    <>
      <ConsoleWrap error={error}>
        <ResizablePanels>
          <QueryTextArea>This is the first panel. It will use the rest of the available space.</QueryTextArea>
          <ResponseTextArea>This is the second panel. Starts with 300px.</ResponseTextArea>
        </ResizablePanels>
      </ConsoleWrap>
      <FooterStyle>
        <div onClick={execute}>
          <Button loading={false} disabled={false}>
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
