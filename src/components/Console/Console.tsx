import React from 'react';
import styled from 'styled-components';
import {ResizablePanels} from '../ResizablePanels/ResizablePanels';

const ConsoleWrap = styled.div`
  margin-top: 100px;
  .panel {
    border: none;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
    min-height: 830px;
  }
  .resizer {
    background: none;
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

export const Console = () => {
  return (
    <ConsoleWrap>
      <ResizablePanels>
        <QueryTextArea>This is the first panel. It will use the rest of the available space.</QueryTextArea>
        <ResponseTextArea>This is the second panel. Starts with 300px.</ResponseTextArea>
      </ResizablePanels>
    </ConsoleWrap>
  );
};
