import React, {FC} from 'react';
import JSONInput from 'react-json-editor-ajrm';
import {useDispatch} from 'react-redux';
import {setQueryText} from '../../store/actions/console';
import locale from 'react-json-editor-ajrm/locale/ru';

type Props = {
  setError?: (error: string | null) => void;
  value: string;
  readonly?: boolean;
  id: string;
};
export const JsonEditor: FC<Props> = ({setError, value, readonly, id}) => {
  const dispatch = useDispatch();
  const queryOnchange = (event: any) => {
    if (setError) {
      if (!event.error) {
        dispatch(setQueryText(event.json));
        setError(null);
      } else {
        setError(event.error.reason);
      }
    }
  };

  return (
    <JSONInput
      id={id}
      colors={{background: 'transparent', string: 'black', colon: 'black', keys: 'black'}}
      style={{warningBox: {display: 'none'}, labels: {display: 'none', width: '0'}}}
      placeholder={value ? JSON.parse(value) : {}}
      onChange={!readonly ? queryOnchange : () => {}}
      locale={locale}
      height="100%"
      width="100%"
      confirmGood={false}
      viewOnly={readonly}
    />
  );
};
