import React from 'react';
import styled from 'styled-components';
import {Loader} from '../Loader/Loader';

const normalButton = 'linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4';
const disabledButton = 'linear-gradient(0deg, #c4c4c4, #c4c4c4), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%)';
const activeButton =
  'linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4';
const hoverButton = `linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4`;
const focusButton = 'linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4';

const ButtonStyle = styled.button`
  background: ${normalButton};
  border-radius: 5px;
  height: 40px;
  width: 110px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.3s all ease;
  &:disabled {
    background: ${disabledButton};
  }
  &:active {
    background: ${(props) => (props.disabled ? disabledButton : activeButton)};
  }
  &:hover {
    background: ${(props) => (props.disabled ? disabledButton : hoverButton)};
  }
  &:focus {
    outline: none;
    background: ${(props) => (props.disabled ? disabledButton : focusButton)};
  }

  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
export const Button = ({loading, disabled, children}) => {
  return (
    <ButtonStyle type="submit" disabled={disabled} loading={loading}>
      {loading ? <Loader /> : children}
    </ButtonStyle>
  );
};
