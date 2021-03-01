import React, {FC} from 'react';
import {Form, Field} from 'react-final-form';
import {Button} from '../../Button/Button';
import styled from 'styled-components';
import {ErrorForm} from './ErrorForm/ErrorForm';
import {LoginValues} from '../../../store/constants';

const FormStyle = styled.section`
  width: 520px;
  height: auto;
  left: calc(50% - 520px / 2);
  top: 222px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;
const FieldBody = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  label {
    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: ${(props) => (props.error ? '#CF2C00' : '#0d0d0d')};
    margin-bottom: 5px;
  }
  .header-label {
    display: flex;
    justify-content: space-between;
    .additional {
      font-family: SF Pro Text;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #999999;
    }
  }

  input {
    background: #ffffff;
    border: ${(props: StyledProps) => (props.error ? '1px solid #CF2C00;' : '1px solid rgba(0, 0, 0, 0.2)')};
    box-sizing: border-box;
    border-radius: 5px;
    height: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }

    font-family: SF Pro Text;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #0d0d0d;
  }
`;

type StyledProps = {
  error: boolean;
};

type ErrorValues = {
  password?: string;
  login?: string;
  sublogin?: string;
};

type Props = {
  onSubmit: (values: LoginValues) => void;
  validate: (values: LoginValues) => ErrorValues;
  loading: boolean;
  disabled: boolean;
  requestError: string;
};

export const LoginForm: FC<Props> = ({onSubmit, validate, loading, disabled, requestError}) => (
  <FormStyle>
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <h2>API-консолька</h2>
          <ErrorForm info={requestError} />
          <Field name="login">
            {({input, meta}) => (
              <FieldBody error={meta.touched && meta.error}>
                <label>Логин</label>
                <input type="text" {...input} />
              </FieldBody>
            )}
          </Field>

          <Field name="sublogin">
            {({input, meta}) => (
              <FieldBody error={meta.touched && meta.error}>
                <div className="header-label">
                  <label>Сублогин</label>
                  <div className="additional">Опционально</div>
                </div>

                <input type="text" {...input} />
              </FieldBody>
            )}
          </Field>
          <Field name="password">
            {({input, meta}) => (
              <FieldBody error={meta.touched && meta.error}>
                <label>Пароль</label>
                <input type="password" {...input} />
              </FieldBody>
            )}
          </Field>

          <Button loading={loading} disabled={disabled}>
            Войти
          </Button>
        </form>
      )}
    />
  </FormStyle>
);
