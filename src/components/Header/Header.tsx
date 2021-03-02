import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {AppState} from '../../store/reducers';
import {AuthState} from '../../store/reducers/auth';
import {logout} from '../../store/actions/auth';

const HeaderStyles = styled.div`
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background: #f6f6f6;
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  .logo__header {
    display: flex;
    .title {
      margin: 0;
      padding: 0;
      font-family: SF Pro Text;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      display: flex;
      align-items: center;
      color: #0d0d0d;
    }
  }
  .user__header {
    display: flex;
    .user-info {
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      border-radius: 5px;
      display: flex;
      padding: 15px;

      font-family: SF Pro Text;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.2);
      .login,
      .sublogin {
        font-family: SF Pro Text;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #0d0d0d;
      }
      .login {
        margin-right: 5px;
      }
      .sublogin {
        margin-left: 5px;
      }
    }
    .exit {
      cursor: pointer;
      font-family: SF Pro Text;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      margin-left: 30px;

      display: flex;
      align-items: center;
      color: #0d0d0d;
    }
    .fullscreen {
      display: flex;
      align-items: center;
    }
  }
`;

const LogoStyled = styled.img`
  margin-right: 20px;
  max-width: 115px;
  max-height: 30px;
`;

const Exit = styled.img`
  margin-left: 8px;
  max-width: 24px;
  max-height: 24px;
`;

const FullScreen = styled.img`
  margin-left: 33px;
  max-width: 18px;
  max-height: 18px;
  cursor: pointer;
`;

export const Header = () => {
  const {login, sublogin} = useSelector<AppState, AuthState>((state) => state.auth);
  const dispatch = useDispatch();
  const userLogout = () => {
    dispatch(logout());
  };
  const openInFullscreen = () => {
    document.documentElement.requestFullscreen();
  };
  return (
    <HeaderStyles>
      <div className="logo__header">
        <LogoStyled src="/icons/logo.svg" alt="logo" />
        <h3 className="title">API-консолька</h3>
      </div>
      <div className="user__header">
        <div className="user-info">
          <div className="login">{login ?? ''}</div>:<div className="sublogin">{sublogin ?? 'sublogin'}</div>
        </div>
        <div className="exit" onClick={userLogout}>
          Выйти
          <Exit src="/icons/log-out.svg" alt="logout" />
        </div>
        <div className="fullscreen" onClick={openInFullscreen}>
          <FullScreen src="/icons/full-screen.svg" alt="" />
        </div>
      </div>
    </HeaderStyles>
  );
};
