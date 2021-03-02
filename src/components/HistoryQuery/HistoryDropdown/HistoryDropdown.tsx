import React, {FC} from 'react';
import styled from 'styled-components';

const Dropdown = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  width: 133px;
  height: 141px;
  padding: 15px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
  .run,
  .copy,
  .delete {
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #0d0d0d;
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;
  }
  .delete {
    &:hover {
      background: #cf2c00;
      color: #ffffff;
    }
  }
  .copy {
    &:hover {
      background: #0055fb;
      color: #ffffff;
    }
  }
`;

type Props = {
  open: boolean;
  copy: () => void;
  run: () => void;
  deleteItem: () => void;
};

export const HistoryDropdown: FC<Props> = ({open, copy, run, deleteItem}) => {
  return (
    <>
      {open && (
        <Dropdown>
          <div className="run" onClick={run}>
            Выполнить
          </div>
          <div className="copy" onClick={copy}>
            Копировать
          </div>
          <div className="delete" onClick={deleteItem}>
            Удалить
          </div>
        </Dropdown>
      )}
    </>
  );
};
